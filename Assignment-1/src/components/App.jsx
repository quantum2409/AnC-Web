import React, { useState } from "react";

function App() {
    const cross = {
        borderCollapse: "collapse",
        marginLeft: "auto",
        marginRight: "auto"
    }
    const styled = {
        border: "1px solid black",
        width: "100px",
        height: "100px",
        textAlign: "center",
        fontSize: "50px"
    }
    const [turn, nextTurn] = useState("X");
    const [ele1, upele1] = useState("");
    const [ele2, upele2] = useState("");
    const [ele3, upele3] = useState("");
    const [ele4, upele4] = useState("");
    const [ele5, upele5] = useState("");
    const [ele6, upele6] = useState("");
    const [ele7, upele7] = useState("");
    const [ele8, upele8] = useState("");
    const [ele9, upele9] = useState("");
    const [isWin, checkWin] = useState(false);
    const [head, updateHead] = useState("X's turn to play")


    function update1() {
        
    }

    function update1() {
        if ((ele1==="")&&(!(((ele1===ele2)&&(ele1===ele3)&&(ele1!==""))||((ele4===ele5)&&(ele4===ele6)&&(ele4!==""))||((ele7===ele8)&&(ele7===ele9)&&(ele7!==""))||((ele1===ele4)&&(ele1===ele7)&&(ele1!==""))||((ele2===ele5)&&(ele2===ele8)&&(ele2!==""))||((ele3===ele6)&&(ele3===ele9)&&(ele3!==""))||((ele1===ele5)&&(ele1===ele9)&&(ele1!==""))||((ele3===ele5)&&(ele3===ele7)&&(ele3!==""))))) {
            const seen = turn;
            upele1(seen);
            winYet();
        }
        else 
        winYet();

    }

    function update2() {
        if ((ele2==="")&&(!(((ele1===ele2)&&(ele1===ele3)&&(ele1!==""))||((ele4===ele5)&&(ele4===ele6)&&(ele4!==""))||((ele7===ele8)&&(ele7===ele9)&&(ele7!==""))||((ele1===ele4)&&(ele1===ele7)&&(ele1!==""))||((ele2===ele5)&&(ele2===ele8)&&(ele2!==""))||((ele3===ele6)&&(ele3===ele9)&&(ele3!==""))||((ele1===ele5)&&(ele1===ele9)&&(ele1!==""))||((ele3===ele5)&&(ele3===ele7)&&(ele3!==""))))) {
            const seen = turn;
            upele2(seen);
            winYet();
        }
        else 
        winYet();
    }

    function update3() {
        if ((ele3==="")&&(!(((ele1===ele2)&&(ele1===ele3)&&(ele1!==""))||((ele4===ele5)&&(ele4===ele6)&&(ele4!==""))||((ele7===ele8)&&(ele7===ele9)&&(ele7!==""))||((ele1===ele4)&&(ele1===ele7)&&(ele1!==""))||((ele2===ele5)&&(ele2===ele8)&&(ele2!==""))||((ele3===ele6)&&(ele3===ele9)&&(ele3!==""))||((ele1===ele5)&&(ele1===ele9)&&(ele1!==""))||((ele3===ele5)&&(ele3===ele7)&&(ele3!==""))))) {
            const seen = turn;
            upele3(seen);
            winYet();
        }
        else 
        winYet();
    }

    function update4() {
        if ((ele4==="")&&(!(((ele1===ele2)&&(ele1===ele3)&&(ele1!==""))||((ele4===ele5)&&(ele4===ele6)&&(ele4!==""))||((ele7===ele8)&&(ele7===ele9)&&(ele7!==""))||((ele1===ele4)&&(ele1===ele7)&&(ele1!==""))||((ele2===ele5)&&(ele2===ele8)&&(ele2!==""))||((ele3===ele6)&&(ele3===ele9)&&(ele3!==""))||((ele1===ele5)&&(ele1===ele9)&&(ele1!==""))||((ele3===ele5)&&(ele3===ele7)&&(ele3!==""))))) {
            const seen = turn;
            upele4(seen);
            winYet();
        }
        else 
        winYet();
    }

    function update5() {
        if ((ele5==="")&&(!(((ele1===ele2)&&(ele1===ele3)&&(ele1!==""))||((ele4===ele5)&&(ele4===ele6)&&(ele4!==""))||((ele7===ele8)&&(ele7===ele9)&&(ele7!==""))||((ele1===ele4)&&(ele1===ele7)&&(ele1!==""))||((ele2===ele5)&&(ele2===ele8)&&(ele2!==""))||((ele3===ele6)&&(ele3===ele9)&&(ele3!==""))||((ele1===ele5)&&(ele1===ele9)&&(ele1!==""))||((ele3===ele5)&&(ele3===ele7)&&(ele3!==""))))) {
            const seen = turn;
            upele5(seen);
            winYet();
        }
        else 
        winYet();
    }

    function update6() {
        if ((ele6==="")&&(!(((ele1===ele2)&&(ele1===ele3)&&(ele1!==""))||((ele4===ele5)&&(ele4===ele6)&&(ele4!==""))||((ele7===ele8)&&(ele7===ele9)&&(ele7!==""))||((ele1===ele4)&&(ele1===ele7)&&(ele1!==""))||((ele2===ele5)&&(ele2===ele8)&&(ele2!==""))||((ele3===ele6)&&(ele3===ele9)&&(ele3!==""))||((ele1===ele5)&&(ele1===ele9)&&(ele1!==""))||((ele3===ele5)&&(ele3===ele7)&&(ele3!==""))))) {
            const seen = turn;
            upele6(seen);
            winYet();
        }
        else 
        winYet();
    }

    function update7() {
        if ((ele7==="")&&(!(((ele1===ele2)&&(ele1===ele3)&&(ele1!==""))||((ele4===ele5)&&(ele4===ele6)&&(ele4!==""))||((ele7===ele8)&&(ele7===ele9)&&(ele7!==""))||((ele1===ele4)&&(ele1===ele7)&&(ele1!==""))||((ele2===ele5)&&(ele2===ele8)&&(ele2!==""))||((ele3===ele6)&&(ele3===ele9)&&(ele3!==""))||((ele1===ele5)&&(ele1===ele9)&&(ele1!==""))||((ele3===ele5)&&(ele3===ele7)&&(ele3!==""))))) {
            const seen = turn;
            upele7(seen);
            winYet();
        }
        else 
        winYet();
    }

    function update8() {
        if ((ele8==="")&&(!(((ele1===ele2)&&(ele1===ele3)&&(ele1!==""))||((ele4===ele5)&&(ele4===ele6)&&(ele4!==""))||((ele7===ele8)&&(ele7===ele9)&&(ele7!==""))||((ele1===ele4)&&(ele1===ele7)&&(ele1!==""))||((ele2===ele5)&&(ele2===ele8)&&(ele2!==""))||((ele3===ele6)&&(ele3===ele9)&&(ele3!==""))||((ele1===ele5)&&(ele1===ele9)&&(ele1!==""))||((ele3===ele5)&&(ele3===ele7)&&(ele3!==""))))) {
            const seen = turn;
            upele8(seen);
            winYet();
        }
        else 
        winYet();
    }

    function update9() {
        if ((ele9==="")&&(!(((ele1===ele2)&&(ele1===ele3)&&(ele1!==""))||((ele4===ele5)&&(ele4===ele6)&&(ele4!==""))||((ele7===ele8)&&(ele7===ele9)&&(ele7!==""))||((ele1===ele4)&&(ele1===ele7)&&(ele1!==""))||((ele2===ele5)&&(ele2===ele8)&&(ele2!==""))||((ele3===ele6)&&(ele3===ele9)&&(ele3!==""))||((ele1===ele5)&&(ele1===ele9)&&(ele1!==""))||((ele3===ele5)&&(ele3===ele7)&&(ele3!==""))))) {
            const seen = turn;
            upele9(seen);
            winYet();
        }
        else 
        winYet();
    }

    function winYet() {
        if (((ele1===ele2)&&(ele1===ele3)&&(ele1!==""))||((ele4===ele5)&&(ele4===ele6)&&(ele4!==""))||((ele7===ele8)&&(ele7===ele9)&&(ele7!==""))||((ele1===ele4)&&(ele1===ele7)&&(ele1!==""))||((ele2===ele5)&&(ele2===ele8)&&(ele2!==""))||((ele3===ele6)&&(ele3===ele9)&&(ele3!==""))||((ele1===ele5)&&(ele1===ele9)&&(ele1!==""))||((ele3===ele5)&&(ele3===ele7)&&(ele3!==""))) {
            checkWin(true);
            if(turn=="O")
            updateHead("X wins");
            else
            updateHead("O wins");
        }
        else {
           modifyturn();
        }
        
    }
    
    function modifyturn() {
        if(!isWin){
            const seen = turn;
            nextTurn(seen==="X"?"O":"X");
            if(seen=="O")
            updateHead("X's turn to play");
            else
            updateHead("O's turn to play");
        }
    }

    // function player() {
        
    //         if((ele1!=="")&&(ele2!=="")&&(ele3!=="")&&(ele4!=="")&&(ele5!=="")&&(ele6!=="")&&(ele7!=="")&&(ele8!=="")&&(ele9!=="")) {
    //             return (
    //                 <h1>Match Draw</h1>
    //             );
    //         }
    //         else if (((ele1===ele2)&&(ele1===ele3)&&(ele1!==""))||((ele4===ele5)&&(ele4===ele6)&&(ele4!==""))||((ele7===ele8)&&(ele7===ele9)&&(ele7!==""))||((ele1===ele4)&&(ele1===ele7)&&(ele1!==""))||((ele2===ele5)&&(ele2===ele8)&&(ele2!==""))||((ele3===ele6)&&(ele3===ele9)&&(ele3!==""))||((ele1===ele5)&&(ele1===ele9)&&(ele1!==""))||((ele3===ele5)&&(ele3===ele7)&&(ele3!==""))) {
    //             return (
    //                 <h2>{turn} wins</h2>
    //             );
    //         }
    //         else {
    //             return (
    //                 <h1>{turn}'s turn to play</h1>
    //             );
    //         }
        
    // }

    return (
        <div>
            <h1>{head}</h1>
            <table style={cross}>
            <tr>
            <td style={styled} onClick={update1}>{ele1}</td>
            <td style={styled} onClick={update2}>{ele2}</td>
            <td style={styled} onClick={update3}>{ele3}</td>
        </tr>
        <tr>
            <td style={styled} onClick={update4}>{ele4}</td>
            <td style={styled} onClick={update5}>{ele5}</td>
            <td style={styled} onClick={update6}>{ele6}</td>
        </tr>
        <tr>
            <td style={styled} onClick={update7}>{ele7}</td>
            <td style={styled} onClick={update8}>{ele8}</td>
            <td style={styled} onClick={update9}>{ele9}</td>
        </tr>
            </table>
            {/* {isWin?Declare():null} */}
        </div>
    );
}

export default App;