class BusinessLogic {

    isMatchingBrackets(str) {
        let stack = [];
        let map = {
            '(': ')', '[': ']', '{': '}'
        }

        for (let i = 0; i < str.length; i++) {
            //if character is an opening brace add it to a stack
            if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
                stack.push(str[i]);
            }
            //if that char is a closing brace, pop from the stack which will also reduce the length of the stack each time a closing bracket is encountered
            else {
                let last = stack.pop();
                //if the pooped elemet from the stack, which is the last opening brace doesn't match the corresponding closing brace in the map, then return false
                if (str[i] !== map[last]) {
                    return false;
                }
            }
        }
        // by the completion of the for loop after checking all the brack of the str, at the end, if the stack is not empty then fail
        if (stack.length !== 0) {
            return "Not Balanced";
        }
        return "Balanced";
    }
}
module.exports = BusinessLogic;