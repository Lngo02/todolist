import React from 'react';
import { FaAdjust } from 'react-icons/fa';

export const Header = () => {
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todolist"/>
                </div>
                <div className="settings">
                    <ul>
                        <li className="settings__add" data-testid="quick-add-task-action">+</li>
                        <li className="settings_darkmode" data-testid="dark-mode-action">
                            <FaAdjust/>
                        </li>
                    </ul> 
                </div>
            </nav>
        </header>
)};
