import React from 'react';

const Loading = () => {
    
    window.onload = function(){
        document.querySelector('.loading').style.display = 'none';
    }

    return (
        <section className='loading'>
            <div className="loading-components">
                <h1 className="loading-title">Loading...</h1>
                <div className="progress-bar" aria-hidden="true">
                    <span className="progress-bar-gauge"></span>
                </div>
            </div>
        </section>
    )
}

export default Loading;