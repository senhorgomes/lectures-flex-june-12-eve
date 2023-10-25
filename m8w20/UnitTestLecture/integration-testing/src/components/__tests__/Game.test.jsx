import React from 'react';
import { render, prettyDOM, fireEvent } from '@testing-library/react';
import Game from '../Game';

describe('Testing for computer selection', ()=> {
    test('activate cheat state when clicking on the Robot', ()=> {
        const { container, getByTestId } = render(<Game/>)
        // console.log(prettyDOM(component.container))
        const robotIcon = getByTestId("robot-icon");
        // Click event
        fireEvent.click(robotIcon);
        expect(robotIcon).toHaveClass('cheating');

        fireEvent.click(robotIcon);
        expect(robotIcon).not.toHaveClass('cheating');
    })
    test('to activate cheating mode, and beat the player', ()=> {
        // Activate cheating mode
        const { container, getByTestId } = render(<Game/>)
        // console.log(prettyDOM(component.container))
        const robotIcon = getByTestId("robot-icon");
        // Click event
        fireEvent.click(robotIcon);
        expect(robotIcon).toHaveClass('cheating');
        // Then have player make a selection
        const playerSelection = getByTestId('Moai');
        fireEvent.click(playerSelection);
        // Have player lose
        // 'Too bad! Better luck next time.'
        const loserMessage = getByTestId('game_result');
        
        expect(loserMessage.innerHTML).toBe('Too bad! Better luck next time.');
    })
})