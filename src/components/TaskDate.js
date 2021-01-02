import React from 'react';
import moment from 'moment';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';

export const TaskDate = ({
    setTaskDate,
    showTaskDate,
    setShowTaskDate
}) => 
    showTaskDate && (
        <div className="task-date" data-testid="task-date-overlay">
            <ul className="task-date__list">
                <li>
                    <div
                        data-testid="task-date-today"
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().format('DD/MM/YYYY'));
                        }}
                        role="button"
                    >
                        <span>
                            <FaSpaceShuttle />
                        </span>
                        <span>Today</span>
                    </div>
                </li>
                <li>
                    <div
                        data-testid="task-date-tomorrow"
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
                        }}
                        role="button"
                    >
                        <span>
                            <FaSun />
                        </span>
                        <span>Tomorrow</span>
                    </div>
                </li>
                <li>
                    <div
                        data-testid="task-date-next-week"
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
                        }}
                        role="button"
                    >
                        <span>
                            <FaRegPaperPlane />
                        </span>
                        <span>Next week</span>
                    </div>
                </li>
            </ul>
        </div>
    );