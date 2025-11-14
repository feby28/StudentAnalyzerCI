function calculateAverage(scores){
    if (!Array.isArray(scores) || scores.length === 0) throw new Error("Invalid scores array");
    if (!scores.every(s => typeof s === "number")) throw new Error("All scores must be numbers");
    const sum = scores.reduce((a,b) => a + b, 0);
    return sum / scores.length;
}

function getGrade(average){
    if (typeof average !== "number") throw new Error("Average must be a number");
    if (average < 0 || average > 100) throw new Error("Average must be between 0-100");
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";
    return "F";
}

module.exports = { calculateAverage, getGrade };