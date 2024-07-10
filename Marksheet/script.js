function generateMarksheet() {
    const name = document.getElementById("name").value;
    const scienceMarks = parseFloat(document.getElementById("science").value);
    const englishMarks = parseFloat(document.getElementById("english").value);
    const totalMarks = 200;
    
    const total = scienceMarks + englishMarks;
    const percentage = (total / totalMarks) * 100;
    
    let result = "FAILED";
    if (percentage >= 40) {
      result = "PASSED";
    }
    
    const markSheet = `
      <h2>Marksheet</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Science Marks:</strong> ${scienceMarks}</p>
      <p><strong>English Marks:</strong> ${englishMarks}</p>
      <p><strong>Total Marks:</strong> ${total}</p>
      <p><strong>Percentage:</strong> ${percentage}%</p>
      <p><strong>Result:</strong> ${result}</p>
    `;
    
    document.getElementById("markSheet").innerHTML = markSheet;
  }