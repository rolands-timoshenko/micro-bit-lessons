import React from "react";
import AppPanel from "../appPanel/AppPanel";
import AppActivity from "../appActivity/AppActivity";
import AppTeacherGuide from "../appTeacherGuide/AppTeacherGuide";

interface IProps {
  lesson: any;
}

const AppLesson = (props: IProps) => {
  const { lesson } = props;
  return (
    <>
      {lesson.introduction && (
        <AppPanel title="Introduction">
          <p>{lesson.introduction}</p>
        </AppPanel>
      )}
      {lesson.teacherGuide && (
        <AppPanel title="Teacher Guide" collapsable>
          <AppTeacherGuide teacherGuide={lesson.teacherGuide} />
        </AppPanel>
      )}
      {lesson.activity && lesson.activity.steps && (
        <AppPanel title="Activity">
          <AppActivity steps={lesson.activity.steps} />
        </AppPanel>
      )}
    </>
  );
};

export default AppLesson;
