import React from 'react'


export default function ArticleComments({date, body}) {




    return (
        <div className="Comments_singleComment">
            <p>{body}</p>
            <p><img src="https://img.icons8.com/ios/16/000000/clock--v1.png"/> {date}</p>
            <br></br>
        </div>
    )
}
