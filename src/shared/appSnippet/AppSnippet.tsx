/**
 * A React component
 * to render MakeCode block snippets
 */
import * as React from "react";
import { withStyles } from "@material-ui/core";
import AppSnippetStyles from "./AppSnippet.styles";

// update url with target editor
export let makecodeUrl: string = "https://makecode.microbit.org/";
// force language if needed
export let lang: string | undefined = undefined;

interface RenderBlocksRequestMessage {
  type: "renderblocks";
  id: string;
  code: string;
  options?: {
    packageId?: string;
    package?: string;
    snippetMode?: boolean;
  };
}

interface RenderBlocksResponseMessage {
  source: "makecode";
  type: "renderblocks";
  id: string;
  uri?: string;
  css?: string;
  svg?: string;
  width?: number;
  height?: number;
  error?: string;
}

interface RenderBlocksRequentResponse {
  req: RenderBlocksRequestMessage;
  cb: (resp: RenderBlocksResponseMessage) => void;
}

let rendererReady = false;
let rendererError: string | undefined = "";
let nextRequest = 0;
const pendingRequests: {
  [index: string]: RenderBlocksRequentResponse;
} = {};

function renderBlocks(
  req: RenderBlocksRequestMessage,
  cb: (resp: RenderBlocksResponseMessage) => void
) {
  req.id = nextRequest++ + "";
  pendingRequests[req.id] = { req, cb };
  if (rendererReady) sendRequest(req);
}

function sendRequest(req: RenderBlocksRequestMessage) {
  const f = startRenderer();
  if (f && f.contentWindow) f.contentWindow.postMessage(req, makecodeUrl);
}

// listen for messages
function handleMessage(ev: MessageEvent) {
  let msg = ev.data;
  if (msg.source !== "makecode") return;

  switch (msg.type) {
    case "renderready":
      rendererReady = true;
      rendererError = undefined;
      Object.keys(pendingRequests).forEach(k =>
        sendRequest(pendingRequests[k].req)
      );
      break;
    case "renderblocks":
      const id = msg.id; // this is the id you sent
      const r = pendingRequests[id];
      if (!r) return;

      delete pendingRequests[id];
      r.cb(msg as RenderBlocksResponseMessage);
      break;
  }
}

function startRenderer(): HTMLIFrameElement | undefined {
  if (!makecodeUrl) return undefined;

  let f = document.getElementById("makecoderenderer") as HTMLIFrameElement;
  if (f) return f;

  window.addEventListener("message", handleMessage, false);

  f = document.createElement("iframe");
  f.id = "makecoderenderer";
  f.style.position = "absolute";
  f.style.left = "0";
  f.style.bottom = "0";
  f.style.width = "1px";
  f.style.height = "1px";
  f.src = `${makecodeUrl}--docs?render=1${lang ? `&lang=${lang}` : ""}`;
  document.body.appendChild(f);
  // check if connection failed
  setTimeout(function() {
    if (!rendererReady)
      rendererError =
        "Oops, can't connect to MakeCode. Please check your internet connection.";
  }, 30000);

  return f;
}

export interface SnippetProps {
  // MakeCode TypeScript code to render
  classes: any;
  code?: string;
  packageId?: string;
  package?: string;
  snippetMode?: boolean;
  loaderCmp?: any;
}

export interface SnippetState {
  rendering?: boolean;
  uri?: string;
  width?: number;
  height?: number;
  error?: string;
}

class AppSnippet extends React.Component<SnippetProps, SnippetState> {
  constructor(props: SnippetProps) {
    super(props);
    this.state = {
      rendering: true
    };
    this.renderProps = this.renderProps.bind(this);
  }

  componentDidMount() {
    startRenderer();
    this.renderProps();
  }

  componentDidUpdate(prevProps: SnippetProps) {
    if (
      this.props.code !== prevProps.code ||
      this.props.packageId !== prevProps.packageId ||
      this.props.package !== prevProps.package ||
      this.props.snippetMode !== prevProps.snippetMode
    ) {
      this.renderProps();
    }
  }

  private renderProps() {
    const { code, packageId, package: _package, snippetMode } = this.props;
    if (code) {
      this.setState({ rendering: true });
      renderBlocks(
        {
          type: "renderblocks",
          id: "",
          code,
          options: {
            packageId,
            package: _package,
            snippetMode
          }
        },
        resp => {
          this.setState({
            uri: resp.uri,
            width: resp.width,
            height: resp.height,
            error: resp.error,
            rendering: false
          });
        }
      );
    }
  }

  renderLoader = () =>
    this.props.loaderCmp ? (
      this.props.loaderCmp
    ) : (
      <div className="ui loader">Loading...</div>
    );

  render(): JSX.Element {
    const { code, classes } = this.props;
    const { uri, width, height, rendering, error } = this.state;
    const loading = !rendererReady;
    const err = error || rendererError;
    const precode = loading || !rendererReady || err || !uri ? code : undefined;
    return (
      <div className={classes.root}>
        {rendering && this.renderLoader()}
        {precode && !rendering ? (
          <pre>
            <code>{precode}</code>
          </pre>
        ) : (
          undefined
        )}
        {err ? <div className="ui message info">{err}</div> : undefined}
        {uri ? (
          <img
            className="ui image"
            alt={code}
            src={uri}
            width={width}
            height={height}
          />
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default withStyles(AppSnippetStyles)(AppSnippet);
