const assert = require("assert");
const { calculateAverage, getGrade } = require("./main");

try {
    // ✅ Valid tests
    assert.strictEqual(calculateAverage([80, 90, 100]), 90);
    assert.strictEqual(getGrade(90), "A");

    // ❌ Invalid tests
    assert.throws(() => calculateAverage([]), /Invalid scores array/);
    assert.throws(() => calculateAverage([80, "ninety", 100]), /All scores must be numbers/);

} catch (error) {
    console.error("Test failed:", error.message);
    process.exit(1);
}

console.log("All tests passed ✅");