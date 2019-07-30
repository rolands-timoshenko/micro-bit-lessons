export default {
  title: "Rock Paper Scissors",
  subtitle: "Make a cool Rock Paper Scissors game in this activity!",
  age: "8+",
  durationInMinutes: 30,
  programmingLanguage: "javaScriptBlocks",
  introduction:
    'This project teaches you how to create a game of rock paper scissors using the "random" block and the LEDs.',
  teacherGuide: {
    learningObjectives: [
      {
        text: "Create a randomly generated variable"
      },
      {
        text: "Use a IF...THEN...ELSE statements"
      },
      {
        text: "Use the score system"
      }
    ],
    standardsAlignment: {
      standard: "CAS",
      statements: [
        {
          codes: ["AL"],
          text:
            "Designs simple algorithms using loops, and selection i.e. if statements."
        },
        {
          codes: ["AB"],
          text: "Declares and assigns variables."
        },
        {
          codes: ["AL", "GE"],
          text:
            "Uses a variable and relational operators within a loop to govern termination."
        },
        {
          codes: ["AL"],
          text: "Detects and corrects errors i.e. debugging, in algorithms."
        },
        {
          codes: ["AL"],
          text:
            "Creates programs that implement algorithms to achieve given goals."
        },
        {
          codes: ["AL"],
          text: "Detects and corrects errors i.e. debugging, in algorithms."
        },
        {
          codes: ["AB"],
          text:
            "Understands that programming bridges the gap between algorithmic solutions and computers."
        },
        {
          codes: ["AL"],
          text: "Uses nested selection statements."
        }
      ]
    }
  },
  activity: {
    steps: [
      {
        text:
          "We want the micro:bit to choose rock, paper, or scissors when you shake it. Place a on shake block so when you shake the micro:bit, it will run part of a program.",
        javaScriptBlocks: "input.onGesture(Gesture.Shake, () => {\n})\n"
      },
      {
        text:
          "Add a weapon variable to store a random number computed with pick random. When you shake the micro:bit, it should pick a random number from 0 to 2 and store it in the variable weapon. (This variable is named weapon because rock, paper, and scissors are the weapons you use to battle your friends!) In a later step, each of the possible numbers (0, 1, or 2) is matched to its own picture. The picture is shown on the LEDs when its number is picked.",
        javaScriptBlocks:
          "let weapon = 0\ninput.onGesture(Gesture.Shake, function () {\n    weapon = Math.randomRange(0, 2)\n})\n"
      },
      {
        text:
          "Place an if block under the pick random and check whether weapon is equal to 0.",
        javaScriptBlocks:
          "let weapon = 0\ninput.onGesture(Gesture.Shake, function () {\n    weapon = Math.randomRange(0, 2)\n    if (weapon == 0) {\n    \n    }\n})\n"
      },
      {
        text:
          "In the if block, place a show leds block that shows a picture of a piece of paper.",
        javaScriptBlocks:
          "let weapon = 0\ninput.onGesture(Gesture.Shake, function () {\n    weapon = Math.randomRange(0, 2)\n    if (weapon == 0) {\n        basic.showLeds(`\n            # # # # #\n            # . . . #\n            # . . . #\n            # . . . #\n            # # # # #\n            `)\n    }\n})\n"
      },
      {
        text:
          "Click '+' to add an 'else' and 'else if' section, then add a condition to check whether weapon is equal to 1.",
        javaScriptBlocks:
          "let weapon = 0\ninput.onGesture(Gesture.Shake, function () {\n    weapon = Math.randomRange(0, 2)\n    if (weapon == 0) {\n        basic.showLeds(`\n            # # # # #\n            # . . . #\n            # . . . #\n            # . . . #\n            # # # # #\n            `)\n    } else if (weapon == 1) {\n    \n    } else {\n    \n    }\n})\n"
      },
      {
        text:
          "Place a show leds block under the else if and draw a rock image on the screen.",
        javaScriptBlocks:
          "let weapon = 0\ninput.onGesture(Gesture.Shake, function () {\n    weapon = Math.randomRange(0, 2)\n    if (weapon == 0) {\n        basic.showLeds(`\n            # # # # #\n            # . . . #\n            # . . . #\n            # . . . #\n            # # # # #\n            `)\n    } else if (weapon == 1) {\n        basic.showLeds(`\n            . . . . .\n            . # # # .\n            . # # # .\n            . # # # .\n            . . . . .\n            `)\n    } else {\n\n    }\n})\n"
      },
      {
        text:
          "Add a show leds block with a picture of scissors to the else part. You don’t need to check if weapon is 2 because 2 is the only number left out of 0, 1, and 2. That’s why you can use an else instead of an else if (click the '+' button to add extra else / else if statements to your condition).",
        javaScriptBlocks:
          "let weapon = 0\ninput.onGesture(Gesture.Shake, function () {\n    weapon = Math.randomRange(0, 2)\n    if (weapon == 0) {\n        basic.showLeds(`\n            # # # # #\n            # . . . #\n            # . . . #\n            # . . . #\n            # # # # #\n            `)\n    } else if (weapon == 1) {\n        basic.showLeds(`\n            . . . . .\n            . # # # .\n            . # # # .\n            . # # # .\n            . . . . .\n            `)\n    } else {\n        basic.showLeds(`\n            # # . . #\n            # # . # .\n            . . # . .\n            # # . # .\n            # # . . #\n            `)\n    }\n})\n"
      },
      {
        text:
          "Your game is ready! Gather your friends and play Rock Paper Scissors!"
      }
    ]
  }
};
