export const RepaymentRouter = 
{
  "contractName": "RepaymentRouter",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "tokenTransferProxy",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "debtRegistry",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "repay",
      "outputs": [
        {
          "name": "_amountRepaid",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_debtRegistry",
          "type": "address"
        },
        {
          "name": "_tokenTransferProxy",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_agreementId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "_payer",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "LogRepayment",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_errorId",
          "type": "uint8"
        },
        {
          "indexed": true,
          "name": "_agreementId",
          "type": "bytes32"
        }
      ],
      "name": "LogError",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    }
  ],
  "bytecode": "0x606060405260008060146101000a81548160ff021916908315150217905550341561002957600080fd5b604051604080610f4e83398101604052808051906020019091908051906020019091905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610e2d806101216000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630eefdbad146100935780632f866f73146100e85780633f4ba83a1461013d5780635c975abb146101525780638456cb591461017f5780638da5cb5b14610194578063f2fde38b146101e9578063ff26812514610222575b600080fd5b341561009e57600080fd5b6100a6610285565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100f357600080fd5b6100fb6102ab565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561014857600080fd5b6101506102d1565b005b341561015d57600080fd5b61016561038f565b604051808215151515815260200191505060405180910390f35b341561018a57600080fd5b6101926103a2565b005b341561019f57600080fd5b6101a7610462565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101f457600080fd5b610220600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610487565b005b341561022d57600080fd5b61026f60048080356000191690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105dc565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561032c57600080fd5b600060149054906101000a900460ff16151561034757600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103fd57600080fd5b600060149054906101000a900460ff1615151561041957600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104e257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561051e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060008060149054906101000a900460ff161515156105fc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561063857600080fd5b60008511151561064757600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156106e857600080fd5b6102c65a03f115156106f957600080fd5b505050604051805190509150600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107845785600019166000600281111561074c57fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610df8565b848473ffffffffffffffffffffffffffffffffffffffff166370a08231336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561082857600080fd5b6102c65a03f1151561083957600080fd5b5050506040518051905010806109615750848473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b151561094457600080fd5b6102c65a03f1151561095557600080fd5b50505060405180519050105b156109b05785600019166001600281111561097857fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610df8565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610a5157600080fd5b6102c65a03f11515610a6257600080fd5b5050506040518051905090508073ffffffffffffffffffffffffffffffffffffffff16635f0280ba87338589896000604051602001526040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b1515610b9157600080fd5b6102c65a03f11515610ba257600080fd5b505050604051805190501515610bfb578560001916600280811115610bc357fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610df8565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166315dacbea853385896000604051602001526040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050602060405180830381600087803b1515610d3057600080fd5b6102c65a03f11515610d4157600080fd5b505050604051805190501515610d5657600080fd5b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d08888604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48492505b505093925050505600a165627a7a72305820456786c860b9a1b3ceeff8c65c3c4c8f04ba6980ce9ecc36afd9e1f83d2391360029",
  "deployedBytecode": "0x60606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630eefdbad146100935780632f866f73146100e85780633f4ba83a1461013d5780635c975abb146101525780638456cb591461017f5780638da5cb5b14610194578063f2fde38b146101e9578063ff26812514610222575b600080fd5b341561009e57600080fd5b6100a6610285565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100f357600080fd5b6100fb6102ab565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561014857600080fd5b6101506102d1565b005b341561015d57600080fd5b61016561038f565b604051808215151515815260200191505060405180910390f35b341561018a57600080fd5b6101926103a2565b005b341561019f57600080fd5b6101a7610462565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101f457600080fd5b610220600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610487565b005b341561022d57600080fd5b61026f60048080356000191690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105dc565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561032c57600080fd5b600060149054906101000a900460ff16151561034757600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103fd57600080fd5b600060149054906101000a900460ff1615151561041957600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104e257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561051e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060008060149054906101000a900460ff161515156105fc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561063857600080fd5b60008511151561064757600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156106e857600080fd5b6102c65a03f115156106f957600080fd5b505050604051805190509150600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107845785600019166000600281111561074c57fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610df8565b848473ffffffffffffffffffffffffffffffffffffffff166370a08231336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b151561082857600080fd5b6102c65a03f1151561083957600080fd5b5050506040518051905010806109615750848473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b151561094457600080fd5b6102c65a03f1151561095557600080fd5b50505060405180519050105b156109b05785600019166001600281111561097857fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610df8565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9876000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610a5157600080fd5b6102c65a03f11515610a6257600080fd5b5050506040518051905090508073ffffffffffffffffffffffffffffffffffffffff16635f0280ba87338589896000604051602001526040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b1515610b9157600080fd5b6102c65a03f11515610ba257600080fd5b505050604051805190501515610bfb578560001916600280811115610bc357fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610df8565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166315dacbea853385896000604051602001526040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050602060405180830381600087803b1515610d3057600080fd5b6102c65a03f11515610d4157600080fd5b505050604051805190501515610d5657600080fd5b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d08888604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48492505b505093925050505600a165627a7a72305820456786c860b9a1b3ceeff8c65c3c4c8f04ba6980ce9ecc36afd9e1f83d2391360029",
  "sourceMap": "1291:2792:5:-;;;268:5:18;247:26;;;;;;;;;;;;;;;;;;;;1936:214:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;509:10:20;501:5;;:18;;;;;;;;;;;;;;;;;;2059:13:5;2031:12;;:42;;;;;;;;;;;;;;;;;;2123:19;2083:18;;:60;;;;;;;;;;;;;;;;;;1936:214;;1291:2792;;;;;;",
  "deployedSourceMap": "1291:2792:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1372:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1334:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:18;;;;;;;;;;;;;;247:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85;;;;;;;;;;;;;;238:20:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169;;;;;;;;;;;;;;;;;;;;;;;;;;;;2413:1668:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1372:44;;;;;;;;;;;;;:::o;1334:32::-;;;;;;;;;;;;;:::o;833:87:18:-;653:5:20;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:18;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;666:85::-;653:5:20;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:18;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:20:-;;;;;;;;;;;;;:::o;832:169::-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;2413:1668:5:-;2571:18;2738:19;3359:21;416:6:18;;;;;;;;;;;415:7;407:16;;;;;;;;2637:1:5;2613:26;;:12;:26;;;;2605:35;;;;;;;;2667:1;2658:6;:10;2650:19;;;;;;;;2760:12;;;;;;;;;;;:27;;;2788:11;2760:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2738:62;;2837:1;2814:25;;:11;:25;;;2810:141;;;2906:11;2855:63;;;2870:33;2864:40;;;;;;;;2855:63;;;;;;;;;;;;2939:1;2932:8;;;;2810:141;3099:6;3061:12;3055:29;;;3085:10;3055:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:50;:136;;;;3185:6;3127:12;3121:29;;;3151:10;3163:18;;;;;;;;;;;3121:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:70;3055:136;3051:265;;;3271:11;3207:76;;;3222:46;3216:53;;;;;;;;3207:76;;;;;;;;;;;;3304:1;3297:8;;;;3051:265;3383:12;;;;;;;;;;;:29;;;3413:11;3383:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3359:66;;3454:13;3440:46;;;3500:11;3525:10;3549:11;3574:6;3594:12;3440:176;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3439:177;3435:303;;;3693:11;3632:73;;;3647:43;3641:50;;;;;;;;3632:73;;;;;;;;;;;;3726:1;3719:8;;;;3435:303;3795:18;;;;;;;;;;;:31;;;3840:12;3866:10;3890:11;3915:6;3795:136;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3787:145;;;;;;;;4016:11;3978:72;;4004:10;3978:72;;3991:11;3978:72;;;;4029:6;4037:12;3978:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;4068:6;4061:13;;429:1:18;2413:1668:5;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"./DebtRegistry.sol\";\nimport \"./TermsContract.sol\";\nimport \"./TokenTransferProxy.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\n\n\n/**\n * The RepaymentRouter routes allowers payers to make repayments on any\n * given debt agreement in any given token by routing the payments to\n * the debt agreement's beneficiary.  Additionally, the router acts\n * as a trusted oracle to the debt agreement's terms contract, informing\n * it of exactly what payments have been made in what quantity and in what token.\n *\n * Authors: Jaynti Kanani -- Github: jdkanani, Nadav Hollander -- Github: nadavhollander\n */\ncontract RepaymentRouter is Pausable {\n    DebtRegistry public debtRegistry;\n    TokenTransferProxy public tokenTransferProxy;\n\n    enum Errors {\n        DEBT_AGREEMENT_NONEXISTENT,\n        PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,\n        REPAYMENT_REJECTED_BY_TERMS_CONTRACT\n    }\n\n    event LogRepayment(\n        bytes32 indexed _agreementId,\n        address indexed _payer,\n        address indexed _beneficiary,\n        uint _amount,\n        address _token\n    );\n\n    event LogError(uint8 indexed _errorId, bytes32 indexed _agreementId);\n\n    /**\n     * Constructor points the repayment router at the deployed registry contract.\n     */\n    function RepaymentRouter (address _debtRegistry, address _tokenTransferProxy) public {\n        debtRegistry = DebtRegistry(_debtRegistry);\n        tokenTransferProxy = TokenTransferProxy(_tokenTransferProxy);\n    }\n\n    /**\n     * Given an agreement id (synonymous to 'issuanceHash' in the debt registry), routes a repayment\n     * of a given ERC20 token  to the debt's current beneficiary, and reports the repayment\n     * to the debt's associated terms contract.\n     */\n    function repay(\n        bytes32 agreementId,\n        uint256 amount,\n        address tokenAddress\n    )\n        public\n        whenNotPaused\n        returns (uint _amountRepaid)\n    {\n        require(tokenAddress != address(0));\n        require(amount > 0);\n\n        // Get registry entry and check if entry is valid\n        address beneficiary = debtRegistry.getBeneficiary(agreementId);\n        if (beneficiary == address(0)) {\n            LogError(uint8(Errors.DEBT_AGREEMENT_NONEXISTENT), agreementId);\n            return 0;\n        }\n\n        // Check payer has sufficient balance and has granted router sufficient allowance\n        if (ERC20(tokenAddress).balanceOf(msg.sender) < amount ||\n            ERC20(tokenAddress).allowance(msg.sender, tokenTransferProxy) < amount) {\n            LogError(uint8(Errors.PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT), agreementId);\n            return 0;\n        }\n\n        // Notify terms contract\n        address termsContract = debtRegistry.getTermsContract(agreementId);\n        if (!TermsContract(termsContract).registerRepayment(\n            agreementId,\n            msg.sender,\n            beneficiary,\n            amount,\n            tokenAddress\n        )) {\n            LogError(uint8(Errors.REPAYMENT_REJECTED_BY_TERMS_CONTRACT), agreementId);\n            return 0;\n        }\n\n        // Transfer amount to creditor\n        require(tokenTransferProxy.transferFrom(\n            tokenAddress,\n            msg.sender,\n            beneficiary,\n            amount\n        ));\n\n        // Log event for repayment\n        LogRepayment(agreementId, msg.sender, beneficiary, amount, tokenAddress);\n\n        return amount;\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/RepaymentRouter.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/RepaymentRouter.sol",
      "exportedSymbols": {
        "RepaymentRouter": [
          2795
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 2604,
        "name": "PragmaDirective",
        "src": "584:23:5"
      },
      {
        "attributes": {
          "SourceUnit": 2290,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
          "file": "./DebtRegistry.sol",
          "scope": 2796,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2605,
        "name": "ImportDirective",
        "src": "609:28:5"
      },
      {
        "attributes": {
          "SourceUnit": 2846,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
          "file": "./TermsContract.sol",
          "scope": 2796,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2606,
        "name": "ImportDirective",
        "src": "638:29:5"
      },
      {
        "attributes": {
          "SourceUnit": 3061,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenTransferProxy.sol",
          "file": "./TokenTransferProxy.sol",
          "scope": 2796,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2607,
        "name": "ImportDirective",
        "src": "668:34:5"
      },
      {
        "attributes": {
          "SourceUnit": 5505,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "scope": 2796,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2608,
        "name": "ImportDirective",
        "src": "703:59:5"
      },
      {
        "attributes": {
          "SourceUnit": 5308,
          "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "scope": 2796,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2609,
        "name": "ImportDirective",
        "src": "763:60:5"
      },
      {
        "attributes": {
          "contractDependencies": [
            5307,
            5461
          ],
          "contractKind": "contract",
          "documentation": "The RepaymentRouter routes allowers payers to make repayments on any\ngiven debt agreement in any given token by routing the payments to\nthe debt agreement's beneficiary.  Additionally, the router acts\nas a trusted oracle to the debt agreement's terms contract, informing\nit of exactly what payments have been made in what quantity and in what token.\n * Authors: Jaynti Kanani -- Github: jdkanani, Nadav Hollander -- Github: nadavhollander",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            2795,
            5307,
            5461
          ],
          "name": "RepaymentRouter",
          "scope": 2796
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Pausable",
                  "referencedDeclaration": 5307,
                  "type": "contract Pausable"
                },
                "id": 2610,
                "name": "UserDefinedTypeName",
                "src": "1319:8:5"
              }
            ],
            "id": 2611,
            "name": "InheritanceSpecifier",
            "src": "1319:8:5"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtRegistry",
              "scope": 2795,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract DebtRegistry",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "DebtRegistry",
                  "referencedDeclaration": 2289,
                  "type": "contract DebtRegistry"
                },
                "id": 2612,
                "name": "UserDefinedTypeName",
                "src": "1334:12:5"
              }
            ],
            "id": 2613,
            "name": "VariableDeclaration",
            "src": "1334:32:5"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenTransferProxy",
              "scope": 2795,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract TokenTransferProxy",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "TokenTransferProxy",
                  "referencedDeclaration": 3060,
                  "type": "contract TokenTransferProxy"
                },
                "id": 2614,
                "name": "UserDefinedTypeName",
                "src": "1372:18:5"
              }
            ],
            "id": 2615,
            "name": "VariableDeclaration",
            "src": "1372:44:5"
          },
          {
            "attributes": {
              "canonicalName": "RepaymentRouter.Errors",
              "name": "Errors"
            },
            "children": [
              {
                "attributes": {
                  "name": "DEBT_AGREEMENT_NONEXISTENT"
                },
                "id": 2616,
                "name": "EnumValue",
                "src": "1445:26:5"
              },
              {
                "attributes": {
                  "name": "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT"
                },
                "id": 2617,
                "name": "EnumValue",
                "src": "1481:39:5"
              },
              {
                "attributes": {
                  "name": "REPAYMENT_REJECTED_BY_TERMS_CONTRACT"
                },
                "id": 2618,
                "name": "EnumValue",
                "src": "1530:36:5"
              }
            ],
            "id": 2619,
            "name": "EnumDefinition",
            "src": "1423:149:5"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogRepayment"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_agreementId",
                      "scope": 2631,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2620,
                        "name": "ElementaryTypeName",
                        "src": "1606:7:5"
                      }
                    ],
                    "id": 2621,
                    "name": "VariableDeclaration",
                    "src": "1606:28:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_payer",
                      "scope": 2631,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2622,
                        "name": "ElementaryTypeName",
                        "src": "1644:7:5"
                      }
                    ],
                    "id": 2623,
                    "name": "VariableDeclaration",
                    "src": "1644:22:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_beneficiary",
                      "scope": 2631,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2624,
                        "name": "ElementaryTypeName",
                        "src": "1676:7:5"
                      }
                    ],
                    "id": 2625,
                    "name": "VariableDeclaration",
                    "src": "1676:28:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_amount",
                      "scope": 2631,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2626,
                        "name": "ElementaryTypeName",
                        "src": "1714:4:5"
                      }
                    ],
                    "id": 2627,
                    "name": "VariableDeclaration",
                    "src": "1714:12:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_token",
                      "scope": 2631,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2628,
                        "name": "ElementaryTypeName",
                        "src": "1736:7:5"
                      }
                    ],
                    "id": 2629,
                    "name": "VariableDeclaration",
                    "src": "1736:14:5"
                  }
                ],
                "id": 2630,
                "name": "ParameterList",
                "src": "1596:160:5"
              }
            ],
            "id": 2631,
            "name": "EventDefinition",
            "src": "1578:179:5"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogError"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_errorId",
                      "scope": 2637,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint8",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint8",
                          "type": "uint8"
                        },
                        "id": 2632,
                        "name": "ElementaryTypeName",
                        "src": "1778:5:5"
                      }
                    ],
                    "id": 2633,
                    "name": "VariableDeclaration",
                    "src": "1778:22:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_agreementId",
                      "scope": 2637,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2634,
                        "name": "ElementaryTypeName",
                        "src": "1802:7:5"
                      }
                    ],
                    "id": 2635,
                    "name": "VariableDeclaration",
                    "src": "1802:28:5"
                  }
                ],
                "id": 2636,
                "name": "ParameterList",
                "src": "1777:54:5"
              }
            ],
            "id": 2637,
            "name": "EventDefinition",
            "src": "1763:69:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "RepaymentRouter",
              "payable": false,
              "scope": 2795,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtRegistry",
                      "scope": 2657,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2638,
                        "name": "ElementaryTypeName",
                        "src": "1962:7:5"
                      }
                    ],
                    "id": 2639,
                    "name": "VariableDeclaration",
                    "src": "1962:21:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenTransferProxy",
                      "scope": 2657,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2640,
                        "name": "ElementaryTypeName",
                        "src": "1985:7:5"
                      }
                    ],
                    "id": 2641,
                    "name": "VariableDeclaration",
                    "src": "1985:27:5"
                  }
                ],
                "id": 2642,
                "name": "ParameterList",
                "src": "1961:52:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2643,
                "name": "ParameterList",
                "src": "2021:0:5"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract DebtRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2613,
                              "type": "contract DebtRegistry",
                              "value": "debtRegistry"
                            },
                            "id": 2644,
                            "name": "Identifier",
                            "src": "2031:12:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract DebtRegistry",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2289,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 2645,
                                "name": "Identifier",
                                "src": "2046:12:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2639,
                                  "type": "address",
                                  "value": "_debtRegistry"
                                },
                                "id": 2646,
                                "name": "Identifier",
                                "src": "2059:13:5"
                              }
                            ],
                            "id": 2647,
                            "name": "FunctionCall",
                            "src": "2046:27:5"
                          }
                        ],
                        "id": 2648,
                        "name": "Assignment",
                        "src": "2031:42:5"
                      }
                    ],
                    "id": 2649,
                    "name": "ExpressionStatement",
                    "src": "2031:42:5"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract TokenTransferProxy"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2615,
                              "type": "contract TokenTransferProxy",
                              "value": "tokenTransferProxy"
                            },
                            "id": 2650,
                            "name": "Identifier",
                            "src": "2083:18:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract TokenTransferProxy",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3060,
                                  "type": "type(contract TokenTransferProxy)",
                                  "value": "TokenTransferProxy"
                                },
                                "id": 2651,
                                "name": "Identifier",
                                "src": "2104:18:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2641,
                                  "type": "address",
                                  "value": "_tokenTransferProxy"
                                },
                                "id": 2652,
                                "name": "Identifier",
                                "src": "2123:19:5"
                              }
                            ],
                            "id": 2653,
                            "name": "FunctionCall",
                            "src": "2104:39:5"
                          }
                        ],
                        "id": 2654,
                        "name": "Assignment",
                        "src": "2083:60:5"
                      }
                    ],
                    "id": 2655,
                    "name": "ExpressionStatement",
                    "src": "2083:60:5"
                  }
                ],
                "id": 2656,
                "name": "Block",
                "src": "2021:129:5"
              }
            ],
            "id": 2657,
            "name": "FunctionDefinition",
            "src": "1936:214:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "repay",
              "payable": false,
              "scope": 2795,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2794,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2658,
                        "name": "ElementaryTypeName",
                        "src": "2437:7:5"
                      }
                    ],
                    "id": 2659,
                    "name": "VariableDeclaration",
                    "src": "2437:19:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "scope": 2794,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 2660,
                        "name": "ElementaryTypeName",
                        "src": "2466:7:5"
                      }
                    ],
                    "id": 2661,
                    "name": "VariableDeclaration",
                    "src": "2466:14:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 2794,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2662,
                        "name": "ElementaryTypeName",
                        "src": "2490:7:5"
                      }
                    ],
                    "id": 2663,
                    "name": "VariableDeclaration",
                    "src": "2490:20:5"
                  }
                ],
                "id": 2664,
                "name": "ParameterList",
                "src": "2427:89:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amountRepaid",
                      "scope": 2794,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2667,
                        "name": "ElementaryTypeName",
                        "src": "2571:4:5"
                      }
                    ],
                    "id": 2668,
                    "name": "VariableDeclaration",
                    "src": "2571:18:5"
                  }
                ],
                "id": 2669,
                "name": "ParameterList",
                "src": "2570:20:5"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5268,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 2665,
                    "name": "Identifier",
                    "src": "2540:13:5"
                  }
                ],
                "id": 2666,
                "name": "ModifierInvocation",
                "src": "2540:13:5"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6709,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2670,
                            "name": "Identifier",
                            "src": "2605:7:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2663,
                                  "type": "address",
                                  "value": "tokenAddress"
                                },
                                "id": 2671,
                                "name": "Identifier",
                                "src": "2613:12:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 2672,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2629:7:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 2673,
                                    "name": "Literal",
                                    "src": "2637:1:5"
                                  }
                                ],
                                "id": 2674,
                                "name": "FunctionCall",
                                "src": "2629:10:5"
                              }
                            ],
                            "id": 2675,
                            "name": "BinaryOperation",
                            "src": "2613:26:5"
                          }
                        ],
                        "id": 2676,
                        "name": "FunctionCall",
                        "src": "2605:35:5"
                      }
                    ],
                    "id": 2677,
                    "name": "ExpressionStatement",
                    "src": "2605:35:5"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6709,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2678,
                            "name": "Identifier",
                            "src": "2650:7:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2661,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2679,
                                "name": "Identifier",
                                "src": "2658:6:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 2680,
                                "name": "Literal",
                                "src": "2667:1:5"
                              }
                            ],
                            "id": 2681,
                            "name": "BinaryOperation",
                            "src": "2658:10:5"
                          }
                        ],
                        "id": 2682,
                        "name": "FunctionCall",
                        "src": "2650:19:5"
                      }
                    ],
                    "id": 2683,
                    "name": "ExpressionStatement",
                    "src": "2650:19:5"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2685
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "beneficiary",
                          "scope": 2794,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 2684,
                            "name": "ElementaryTypeName",
                            "src": "2738:7:5"
                          }
                        ],
                        "id": 2685,
                        "name": "VariableDeclaration",
                        "src": "2738:19:5"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getBeneficiary",
                              "referencedDeclaration": 2164,
                              "type": "function (bytes32) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2613,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 2686,
                                "name": "Identifier",
                                "src": "2760:12:5"
                              }
                            ],
                            "id": 2687,
                            "name": "MemberAccess",
                            "src": "2760:27:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2659,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 2688,
                            "name": "Identifier",
                            "src": "2788:11:5"
                          }
                        ],
                        "id": 2689,
                        "name": "FunctionCall",
                        "src": "2760:40:5"
                      }
                    ],
                    "id": 2690,
                    "name": "VariableDeclarationStatement",
                    "src": "2738:62:5"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2685,
                              "type": "address",
                              "value": "beneficiary"
                            },
                            "id": 2691,
                            "name": "Identifier",
                            "src": "2814:11:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 2692,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2829:7:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 2693,
                                "name": "Literal",
                                "src": "2837:1:5"
                              }
                            ],
                            "id": 2694,
                            "name": "FunctionCall",
                            "src": "2829:10:5"
                          }
                        ],
                        "id": 2695,
                        "name": "BinaryOperation",
                        "src": "2814:25:5"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        },
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2637,
                                      "type": "function (uint8,bytes32)",
                                      "value": "LogError"
                                    },
                                    "id": 2696,
                                    "name": "Identifier",
                                    "src": "2855:8:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint8",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_enum$_Errors_$2619",
                                              "typeString": "enum RepaymentRouter.Errors"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint8)",
                                          "value": "uint8"
                                        },
                                        "id": 2697,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "2864:5:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "member_name": "DEBT_AGREEMENT_NONEXISTENT",
                                          "referencedDeclaration": null,
                                          "type": "enum RepaymentRouter.Errors"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2619,
                                              "type": "type(enum RepaymentRouter.Errors)",
                                              "value": "Errors"
                                            },
                                            "id": 2698,
                                            "name": "Identifier",
                                            "src": "2870:6:5"
                                          }
                                        ],
                                        "id": 2699,
                                        "name": "MemberAccess",
                                        "src": "2870:33:5"
                                      }
                                    ],
                                    "id": 2700,
                                    "name": "FunctionCall",
                                    "src": "2864:40:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2659,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2701,
                                    "name": "Identifier",
                                    "src": "2906:11:5"
                                  }
                                ],
                                "id": 2702,
                                "name": "FunctionCall",
                                "src": "2855:63:5"
                              }
                            ],
                            "id": 2703,
                            "name": "ExpressionStatement",
                            "src": "2855:63:5"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 2669
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 2704,
                                "name": "Literal",
                                "src": "2939:1:5"
                              }
                            ],
                            "id": 2705,
                            "name": "Return",
                            "src": "2932:8:5"
                          }
                        ],
                        "id": 2706,
                        "name": "Block",
                        "src": "2841:110:5"
                      }
                    ],
                    "id": 2707,
                    "name": "IfStatement",
                    "src": "2810:141:5"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "||",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "balanceOf",
                                      "referencedDeclaration": 5518,
                                      "type": "function (address) view external returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "contract ERC20",
                                          "type_conversion": true
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                }
                                              ],
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 5504,
                                              "type": "type(contract ERC20)",
                                              "value": "ERC20"
                                            },
                                            "id": 2708,
                                            "name": "Identifier",
                                            "src": "3055:5:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2663,
                                              "type": "address",
                                              "value": "tokenAddress"
                                            },
                                            "id": 2709,
                                            "name": "Identifier",
                                            "src": "3061:12:5"
                                          }
                                        ],
                                        "id": 2710,
                                        "name": "FunctionCall",
                                        "src": "3055:19:5"
                                      }
                                    ],
                                    "id": 2711,
                                    "name": "MemberAccess",
                                    "src": "3055:29:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 6706,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 2712,
                                        "name": "Identifier",
                                        "src": "3085:3:5"
                                      }
                                    ],
                                    "id": 2713,
                                    "name": "MemberAccess",
                                    "src": "3085:10:5"
                                  }
                                ],
                                "id": 2714,
                                "name": "FunctionCall",
                                "src": "3055:41:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2661,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2715,
                                "name": "Identifier",
                                "src": "3099:6:5"
                              }
                            ],
                            "id": 2716,
                            "name": "BinaryOperation",
                            "src": "3055:50:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_contract$_TokenTransferProxy_$3060",
                                          "typeString": "contract TokenTransferProxy"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "allowance",
                                      "referencedDeclaration": 5475,
                                      "type": "function (address,address) view external returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "contract ERC20",
                                          "type_conversion": true
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                                }
                                              ],
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 5504,
                                              "type": "type(contract ERC20)",
                                              "value": "ERC20"
                                            },
                                            "id": 2717,
                                            "name": "Identifier",
                                            "src": "3121:5:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2663,
                                              "type": "address",
                                              "value": "tokenAddress"
                                            },
                                            "id": 2718,
                                            "name": "Identifier",
                                            "src": "3127:12:5"
                                          }
                                        ],
                                        "id": 2719,
                                        "name": "FunctionCall",
                                        "src": "3121:19:5"
                                      }
                                    ],
                                    "id": 2720,
                                    "name": "MemberAccess",
                                    "src": "3121:29:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 6706,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 2721,
                                        "name": "Identifier",
                                        "src": "3151:3:5"
                                      }
                                    ],
                                    "id": 2722,
                                    "name": "MemberAccess",
                                    "src": "3151:10:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2615,
                                      "type": "contract TokenTransferProxy",
                                      "value": "tokenTransferProxy"
                                    },
                                    "id": 2723,
                                    "name": "Identifier",
                                    "src": "3163:18:5"
                                  }
                                ],
                                "id": 2724,
                                "name": "FunctionCall",
                                "src": "3121:61:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2661,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2725,
                                "name": "Identifier",
                                "src": "3185:6:5"
                              }
                            ],
                            "id": 2726,
                            "name": "BinaryOperation",
                            "src": "3121:70:5"
                          }
                        ],
                        "id": 2727,
                        "name": "BinaryOperation",
                        "src": "3055:136:5"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        },
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2637,
                                      "type": "function (uint8,bytes32)",
                                      "value": "LogError"
                                    },
                                    "id": 2728,
                                    "name": "Identifier",
                                    "src": "3207:8:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint8",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_enum$_Errors_$2619",
                                              "typeString": "enum RepaymentRouter.Errors"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint8)",
                                          "value": "uint8"
                                        },
                                        "id": 2729,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "3216:5:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "member_name": "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT",
                                          "referencedDeclaration": null,
                                          "type": "enum RepaymentRouter.Errors"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2619,
                                              "type": "type(enum RepaymentRouter.Errors)",
                                              "value": "Errors"
                                            },
                                            "id": 2730,
                                            "name": "Identifier",
                                            "src": "3222:6:5"
                                          }
                                        ],
                                        "id": 2731,
                                        "name": "MemberAccess",
                                        "src": "3222:46:5"
                                      }
                                    ],
                                    "id": 2732,
                                    "name": "FunctionCall",
                                    "src": "3216:53:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2659,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2733,
                                    "name": "Identifier",
                                    "src": "3271:11:5"
                                  }
                                ],
                                "id": 2734,
                                "name": "FunctionCall",
                                "src": "3207:76:5"
                              }
                            ],
                            "id": 2735,
                            "name": "ExpressionStatement",
                            "src": "3207:76:5"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 2669
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 2736,
                                "name": "Literal",
                                "src": "3304:1:5"
                              }
                            ],
                            "id": 2737,
                            "name": "Return",
                            "src": "3297:8:5"
                          }
                        ],
                        "id": 2738,
                        "name": "Block",
                        "src": "3193:123:5"
                      }
                    ],
                    "id": 2739,
                    "name": "IfStatement",
                    "src": "3051:265:5"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2741
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termsContract",
                          "scope": 2794,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 2740,
                            "name": "ElementaryTypeName",
                            "src": "3359:7:5"
                          }
                        ],
                        "id": 2741,
                        "name": "VariableDeclaration",
                        "src": "3359:21:5"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getTermsContract",
                              "referencedDeclaration": 2177,
                              "type": "function (bytes32) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2613,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 2742,
                                "name": "Identifier",
                                "src": "3383:12:5"
                              }
                            ],
                            "id": 2743,
                            "name": "MemberAccess",
                            "src": "3383:29:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2659,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 2744,
                            "name": "Identifier",
                            "src": "3413:11:5"
                          }
                        ],
                        "id": 2745,
                        "name": "FunctionCall",
                        "src": "3383:42:5"
                      }
                    ],
                    "id": 2746,
                    "name": "VariableDeclarationStatement",
                    "src": "3359:66:5"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!",
                          "prefix": true,
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "registerRepayment",
                                  "referencedDeclaration": 2821,
                                  "type": "function (bytes32,address,address,uint256,address) external returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "contract TermsContract",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2845,
                                          "type": "type(contract TermsContract)",
                                          "value": "TermsContract"
                                        },
                                        "id": 2747,
                                        "name": "Identifier",
                                        "src": "3440:13:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2741,
                                          "type": "address",
                                          "value": "termsContract"
                                        },
                                        "id": 2748,
                                        "name": "Identifier",
                                        "src": "3454:13:5"
                                      }
                                    ],
                                    "id": 2749,
                                    "name": "FunctionCall",
                                    "src": "3440:28:5"
                                  }
                                ],
                                "id": 2750,
                                "name": "MemberAccess",
                                "src": "3440:46:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2659,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 2751,
                                "name": "Identifier",
                                "src": "3500:11:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6706,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 2752,
                                    "name": "Identifier",
                                    "src": "3525:3:5"
                                  }
                                ],
                                "id": 2753,
                                "name": "MemberAccess",
                                "src": "3525:10:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2685,
                                  "type": "address",
                                  "value": "beneficiary"
                                },
                                "id": 2754,
                                "name": "Identifier",
                                "src": "3549:11:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2661,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2755,
                                "name": "Identifier",
                                "src": "3574:6:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2663,
                                  "type": "address",
                                  "value": "tokenAddress"
                                },
                                "id": 2756,
                                "name": "Identifier",
                                "src": "3594:12:5"
                              }
                            ],
                            "id": 2757,
                            "name": "FunctionCall",
                            "src": "3440:176:5"
                          }
                        ],
                        "id": 2758,
                        "name": "UnaryOperation",
                        "src": "3439:177:5"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        },
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2637,
                                      "type": "function (uint8,bytes32)",
                                      "value": "LogError"
                                    },
                                    "id": 2759,
                                    "name": "Identifier",
                                    "src": "3632:8:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint8",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_enum$_Errors_$2619",
                                              "typeString": "enum RepaymentRouter.Errors"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint8)",
                                          "value": "uint8"
                                        },
                                        "id": 2760,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "3641:5:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "member_name": "REPAYMENT_REJECTED_BY_TERMS_CONTRACT",
                                          "referencedDeclaration": null,
                                          "type": "enum RepaymentRouter.Errors"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2619,
                                              "type": "type(enum RepaymentRouter.Errors)",
                                              "value": "Errors"
                                            },
                                            "id": 2761,
                                            "name": "Identifier",
                                            "src": "3647:6:5"
                                          }
                                        ],
                                        "id": 2762,
                                        "name": "MemberAccess",
                                        "src": "3647:43:5"
                                      }
                                    ],
                                    "id": 2763,
                                    "name": "FunctionCall",
                                    "src": "3641:50:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2659,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2764,
                                    "name": "Identifier",
                                    "src": "3693:11:5"
                                  }
                                ],
                                "id": 2765,
                                "name": "FunctionCall",
                                "src": "3632:73:5"
                              }
                            ],
                            "id": 2766,
                            "name": "ExpressionStatement",
                            "src": "3632:73:5"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 2669
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 2767,
                                "name": "Literal",
                                "src": "3726:1:5"
                              }
                            ],
                            "id": 2768,
                            "name": "Return",
                            "src": "3719:8:5"
                          }
                        ],
                        "id": 2769,
                        "name": "Block",
                        "src": "3618:120:5"
                      }
                    ],
                    "id": 2770,
                    "name": "IfStatement",
                    "src": "3435:303:5"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6709,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2771,
                            "name": "Identifier",
                            "src": "3787:7:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "transferFrom",
                                  "referencedDeclaration": 3059,
                                  "type": "function (address,address,address,uint256) external returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2615,
                                      "type": "contract TokenTransferProxy",
                                      "value": "tokenTransferProxy"
                                    },
                                    "id": 2772,
                                    "name": "Identifier",
                                    "src": "3795:18:5"
                                  }
                                ],
                                "id": 2773,
                                "name": "MemberAccess",
                                "src": "3795:31:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2663,
                                  "type": "address",
                                  "value": "tokenAddress"
                                },
                                "id": 2774,
                                "name": "Identifier",
                                "src": "3840:12:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6706,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 2775,
                                    "name": "Identifier",
                                    "src": "3866:3:5"
                                  }
                                ],
                                "id": 2776,
                                "name": "MemberAccess",
                                "src": "3866:10:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2685,
                                  "type": "address",
                                  "value": "beneficiary"
                                },
                                "id": 2777,
                                "name": "Identifier",
                                "src": "3890:11:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2661,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2778,
                                "name": "Identifier",
                                "src": "3915:6:5"
                              }
                            ],
                            "id": 2779,
                            "name": "FunctionCall",
                            "src": "3795:136:5"
                          }
                        ],
                        "id": 2780,
                        "name": "FunctionCall",
                        "src": "3787:145:5"
                      }
                    ],
                    "id": 2781,
                    "name": "ExpressionStatement",
                    "src": "3787:145:5"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2631,
                              "type": "function (bytes32,address,address,uint256,address)",
                              "value": "LogRepayment"
                            },
                            "id": 2782,
                            "name": "Identifier",
                            "src": "3978:12:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2659,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 2783,
                            "name": "Identifier",
                            "src": "3991:11:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6706,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 2784,
                                "name": "Identifier",
                                "src": "4004:3:5"
                              }
                            ],
                            "id": 2785,
                            "name": "MemberAccess",
                            "src": "4004:10:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2685,
                              "type": "address",
                              "value": "beneficiary"
                            },
                            "id": 2786,
                            "name": "Identifier",
                            "src": "4016:11:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2661,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 2787,
                            "name": "Identifier",
                            "src": "4029:6:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2663,
                              "type": "address",
                              "value": "tokenAddress"
                            },
                            "id": 2788,
                            "name": "Identifier",
                            "src": "4037:12:5"
                          }
                        ],
                        "id": 2789,
                        "name": "FunctionCall",
                        "src": "3978:72:5"
                      }
                    ],
                    "id": 2790,
                    "name": "ExpressionStatement",
                    "src": "3978:72:5"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2669
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 2661,
                          "type": "uint256",
                          "value": "amount"
                        },
                        "id": 2791,
                        "name": "Identifier",
                        "src": "4068:6:5"
                      }
                    ],
                    "id": 2792,
                    "name": "Return",
                    "src": "4061:13:5"
                  }
                ],
                "id": 2793,
                "name": "Block",
                "src": "2595:1486:5"
              }
            ],
            "id": 2794,
            "name": "FunctionDefinition",
            "src": "2413:1668:5"
          }
        ],
        "id": 2795,
        "name": "ContractDefinition",
        "src": "1291:2792:5"
      }
    ],
    "id": 2796,
    "name": "SourceUnit",
    "src": "584:3500:5"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x6a4e6cb8167770e2b53d160248eeae6db5dc9652"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xa146af5d5a43c1480b3c1bf556db0926d1db893a"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-10T20:49:09.177Z"
}