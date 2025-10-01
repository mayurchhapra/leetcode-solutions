# LeetCode Solutions

Welcome to the LeetCode Solutions repository! This is a collaborative platform where developers can share their solutions to LeetCode problems in multiple programming languages.

## 📁 Repository Structure

This repository is organized by programming languages. Each language has its own directory:

- `Python/` - Python solutions
- `Java/` - Java solutions
- `C++/` - C++ solutions
- `JavaScript/` - JavaScript solutions
- `TypeScript/` - TypeScript solutions
- `Go/` - Go solutions
- `Ruby/` - Ruby solutions
- `C#/` - C# solutions
- `Kotlin/` - Kotlin solutions
- `Swift/` - Swift solutions
- `PHP/` - PHP solutions
- `Rust/` - Rust solutions

## 📝 Naming Convention

When contributing your solution, please follow this naming convention:

```
<problem-number>. <Problem Name> - <your-username>.<file-extension>
```

### Examples:

- `1. Two Sum - john_doe.py`
- `2. Add Two Numbers - jane_smith.java`
- `3. Longest Substring Without Repeating Characters - alice123.cpp`
- `20. Valid Parentheses - bob_coder.js`

## 🤝 How to Contribute

Follow these steps to contribute your LeetCode solutions:

### 1. Fork the Repository
Click the "Fork" button at the top right of this repository to create your own copy.

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR-USERNAME/leetcode-solutions.git
cd leetcode-solutions
```

### 3. Create a New Branch
```bash
git checkout -b add-solution-<problem-number>
```

### 4. Add Your Solution
- Navigate to the appropriate language directory
- Create a new file following the naming convention
- Add your solution code with comments explaining your approach

### 5. Commit Your Changes
```bash
git add .
git commit -m "Add solution for problem <number>: <Problem Name>"
```

### 6. Push to Your Fork
```bash
git push origin add-solution-<problem-number>
```

### 7. Create a Pull Request
Go to the original repository and click "New Pull Request". Provide a clear description of your solution.

## 💡 Solution Guidelines

When adding your solution, please include:

- **Problem statement** (as a comment at the top of the file)
- **Your approach** (brief explanation in comments)
- **Time complexity** (e.g., O(n))
- **Space complexity** (e.g., O(1))
- **Clean, readable code** with meaningful variable names

### Example Solution Format:

```python
"""
Problem: 1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.

Approach:
- Use a hash map to store the complement of each number
- For each number, check if its complement exists in the hash map

Time Complexity: O(n)
Space Complexity: O(n)

Author: your-username
"""

def twoSum(nums, target):
    # Your solution code here
    pass
```

## 📋 Code of Conduct

- Be respectful and considerate
- Write clean and well-documented code
- Avoid submitting duplicate solutions (check existing solutions first)
- Ensure your solution works correctly before submitting

## ⭐ Show Your Support

If you find this repository helpful, please give it a star! It helps others discover this collaborative resource.

## 📄 License

This project is open source and available for educational purposes.

---

Happy Coding! 🚀
