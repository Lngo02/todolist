import React from 'react';
import { firebase } from '../firebase';

export const Checkbox = ({id, taskDesc}) => {
    const archiveTask = () => {
        firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .update({
                archived: true,
            });
    };

    return (
        <div 
            className="checkbox-holder" 
            data-testid="checkbox-action" 
            onClick={() => archiveTask()}
            onKeyDown={(e) => {
                if (e.key === 'Enter') archiveTask();
            }}
            aria-label={`Mark ${taskDesc} as done?`}
            tabIndex={0}
            role="button"
        >
            <span className="checkbox"/>
        </div> 
    )
};