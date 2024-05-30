function calGPA() {
  let finalMarks = $("#finalMarks").val();
  let midTerm = $("#midTerm").val();
  let assignment = $("#assignment").val();
  let quiz = $("#quiz").val();
  let obtainMarks =
    parseInt(finalMarks) +
    parseInt(midTerm) +
    parseInt(assignment) +
    parseInt(quiz);
  // console.log(obtainMarks);
  let totalMarks = 500;

  let newMaping = [
    {
      key: "90",
      value: "4.0",
    },
    {
      key: "85",
      value: "3.7",
    },
    {
      key: "80",
      value: "3.3",
    },
    {
      key: "75",
      value: "3.0",
    },
    {
      key: "70",
      value: "2.7",
    },
    {
      key: "65",
      value: "2.3",
    },
    {
      key: "60",
      value: "2.0",
    },
    {
      key: "55",
      value: "1.7",
    },
    {
      key: "50",
      value: "1.3",
    },
    {
      key: "45",
      value: "1.0",
    },
    {
      key: "0",
      value: "0.0",
    },
  ];

  let marksPerc = (obtainMarks / totalMarks) * 100;

  let finalGpa = [];
  for (const obj of newMaping) {
    if (marksPerc >= obj.key) {
      finalGpa.push(obj.value);
      break;
    }
  }
  $("#resultOf-Q11").text(`Your final GPA is ${finalGpa}`);
}
