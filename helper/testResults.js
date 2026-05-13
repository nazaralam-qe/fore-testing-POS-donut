// helper/testResults.js
import fs from 'fs';
const path = './reports/test-results.json';

let testResults = {
    passed: [],
    failed: [],
};

export function saveTestResults() {
    fs.writeFileSync(path, JSON.stringify(testResults, null, 2));
}

export function loadTestResults() {
    if (fs.existsSync(path)) {
        const data = fs.readFileSync(path, 'utf-8');
        return JSON.parse(data);
    }
    return { passed: [], failed: [] };
}

export function addTestResult(status, testName) {
    if (status === 'passed') {
        testResults.passed.push(testName);
    } else {
        testResults.failed.push(testName);
    }
}
