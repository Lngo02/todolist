import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { AddTask } from '../AddTasks';

export const Header = ({ darkMode, setDarkMode }) => {
    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todolist"/>
                </div>
                <div className="settings">
                    <ul>
                        <li className="settings__add" data-testid="quick-add-task-action">+</li>
                        <li className="settings__darkmode">
                            <button
                                data-testid="dark-mode-action"
                                type="button"
                                onClick={() => setDarkMode(!darkMode)}
                            >
                               <FaPizzaSlice /> 
                            </button>
                            
                        </li>
                    </ul> 
                </div>
            </nav>
        </header>
)};
