module.exports = {
    "type": "Program",
    "start": 0,
    "end": 57,
    "body": [{
        "type": "VariableDeclaration",
        "start": 0,
        "end": 12,
        "declarations": [{
            "type": "VariableDeclarator",
            "start": 4,
            "end": 11,
            "id": {
                "type": "Identifier",
                "start": 4,
                "end": 5,
                "name": "s"
            },
            "init": {
                "type": "Literal",
                "start": 8,
                "end": 11,
                "value": 123,
                "raw": "123"
            }
        }],
        "kind": "const"
    }, {
        "type": "ExpressionStatement",
        "start": 13,
        "end": 28,
        "expression": {
            "type": "CallExpression",
            "start": 13,
            "end": 27,
            "callee": {
                "type": "MemberExpression",
                "start": 13,
                "end": 24,
                "object": {
                    "type": "Identifier",
                    "start": 13,
                    "end": 20,
                    "name": "console"
                },
                "property": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 24,
                    "name": "log"
                },
                "computed": false
            },
            "arguments": [{
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "name": "s"
            }]
        }
    }, {
        "type": "ExpressionStatement",
        "start": 29,
        "end": 57,
        "expression": {
            "type": "AssignmentExpression",
            "start": 29,
            "end": 56,
            "operator": "=",
            "left": {
                "type": "MemberExpression",
                "start": 29,
                "end": 43,
                "object": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 35,
                    "name": "module"
                },
                "property": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 43,
                    "name": "exports"
                },
                "computed": false
            },
            "right": {
                "type": "ObjectExpression",
                "start": 46,
                "end": 56,
                "properties": [{
                    "type": "Property",
                    "start": 50,
                    "end": 54,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "name": "s"
                    },
                    "value": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 54,
                        "name": "s"
                    },
                    "kind": "init"
                }]
            }
        }
    }],
    "sourceType": "script"
}