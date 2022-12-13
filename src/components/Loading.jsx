import React from 'react';
import styled from 'styled-components'

const Loading = () => {
    
    const LoadingSection = () => {
        return <section className='loading'/>
    }

    window.onload = function(){
        LoadingSection.style.display = 'none';
    }

    return (
        <LoadingSection>
            <div className="loading-components">
                <h1 className="loading-title">Loading...</h1>
                <div className="progress-bar" aria-hidden="true">
                    <span className="progress-bar-gauge"></span>
                </div>
            </div>
        </LoadingSection>
    )
}

export default Loading;