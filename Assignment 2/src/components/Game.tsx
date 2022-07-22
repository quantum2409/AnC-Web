import { constants } from 'buffer';
import * as React from 'react';
import styled from 'styled-components';
import Row from './Row';
import Column from './Column';
import {BoardState, useGameState, Value} from './gameState'
import { type } from '@testing-library/user-event/dist/type';
import styles from '../components/styles.module.css';

function Game() {
    const {
        gameState,
        current,
        xIsNext,
        winner,
        handleClick,
        jumpTo
    } = useGameState();

function Status(winner: Value, xIsNext: boolean) {
    if ((winner) !== null) {
        return (
            <h3>{winner} Wins</h3>
        )
        }
    else {
        if (xIsNext) {
            return (
                <h3>X goes next</h3>
            );
        }
        else {
            return (
                <h3>O goes next</h3>
            );
        }
    }
    }



    return (
        <div className={styles.central}>
            <Row>
                <Column>
                    <div>{Status(winner, xIsNext)}</div>
                    <Board board={current} onClick={handleClick}/>
                </Column>
                <Log history={gameState.history} jumpTo={jumpTo}/>
            </Row>
        </div>
    );
}

type BoardProps = {
    board: BoardState,
    onClick: (square: number) => void
}

function Board({board, onClick}: BoardProps) {
    const createProps = (square: number): SquareProps => {
        return {
            value: board[square],
            onClick: () => onClick(square),
        }
    };
    return (
        <Column>
            <Row >
                <Squared {...createProps(0)}/>
                <Squared {...createProps(1)}/>
                <Squared {...createProps(2)}/>
            </Row>
            <Row>
                <Squared {...createProps(3)}/>
                <Squared {...createProps(4)}/>
                <Squared {...createProps(5)}/>
            </Row>
            <Row>
                <Squared {...createProps(6)}/>
                <Squared {...createProps(7)}/>
                <Squared {...createProps(8)}/>
            </Row>
        </Column>
    );
}

type SquareProps = {
    value: Value,
    onClick: () => void
}

function Squared(props: SquareProps) {
    
    return (
        <button className={styles.sqElement} onClick={props.onClick}>{props.value}</button>
    )
}

function notice(index: any) {
    if(index===0) {
        return (
            <p>Let's Start</p>
        );
    }
    else {
        return (
            <p>move number {index}</p>
        )
    }
}

function Log(props: LogProps) {
    return (
        <ol>
            {props.history.map((_,index) => {
                return (
                    <li key = {index}>
                        <button onClick={() => props.jumpTo(index)}>
                            {/* Go to {index === 0 ? 'start' : 'move #${index}'} */}
                            {notice(index)}
                        </button>
                    </li>
                )
            })}
        </ol>
    );
}

type LogProps = {
    history: BoardState[],
    jumpTo: (step: number) => void
}


export default Game;