import React from 'react'
import "../../assets/styles/Library.css";
import LibraryHeader from './LibraryHeader'
import "../../assets/styles/AuthLibrary.css";
import { BsDownload, BsFillChatSquareTextFill } from 'react-icons/bs'
import Thumbs from './Thumbs'

function AuthLibrary() {
  return (
    <div>
        <div className='doc'>
        <LibraryHeader />
        </div>
        <div className='auth'>
            <p className='auth-l'><a className='doc-link' href='/Library'>Library</a>{'>'} jwt-token</p>
            <div className='auth-title'>
                <h3 className='a'>Jwt Web token Authentication</h3>
                <button className='b'>Download code<span><BsDownload /></span></button>
            </div>
        <div className='auth-desc'>
            <h5>Description</h5>
            <p>
                JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app’s frontend) and a server (your app’s backend).
                They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography (hashing) to ensure that the JSON contents (also known as JWT claims) cannot be altered by the client or a malicious party.
                Now that you understand JSON as a data text format, you may be wondering What are tokens? To put it simply, a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves
            </p>
            <h5>Install</h5>
            <div className='auth-box'>
                <p> $ npm i jwtwebtoken</p>
            </div>
            <h5>Configure Strategy</h5>
            <p>Download file and paste in project</p>
            <h5>In env file</h5>
            <div className='auth-box'>
                <p>{'secret_key=yoursecretkey'}</p>
                <p>{'expires_in=timeyouwant'}</p>
            </div>
            <h5>In Controller file</h5>
            <div className='auth-box'>
                <p>{`import {generateToken} from 'filePathOfAuthController' `}</p>
                <p>{'const login = () => {'}</p>
                <p>{'   // ...login code'}</p>
                <p>{'   const token = generateToken(pass user object here)'}</p>
                <p>{'}'}</p>
            </div>
            <h5>In Route file</h5>
            <div className='auth-box'>
                <p>{`import {auth} from 'filePathOfAuthController`}</p>
                <p>{'//add auth as middleware to all route you want to protect'}</p>
            </div>
            <h5>license</h5>
            <p>The MIT License</p>
        </div>
        <hr></hr>
        <div className='comments'>
            <div className='comments-start'>
                <div className='auth-like'>
                    <p>was this helpful </p>
                    <span><Thumbs /></span>
                </div>
                <div>
                    <span><BsFillChatSquareTextFill /> 100 comments</span>
                </div>
            </div>
            <div className='comments-add'>
                <div class="comments-add-wrapper">
                    <input type="text" name="search" placeholder="Add a comment"  />
                    <button>Add comment</button>
                </div>
            </div>
            <div className='comments-box'>
                <h3>Ademola Ogunlalu . 1h</h3>
                <p>Optional. For the purpose of mitigating replay attacks, specify the string value to use to associate a client session with an id_token. The id_token includes information (claims) about the user and, if specified, the nonce value. The id_token is encoded as a JWT and returned in the</p>
                <div className='auth-like'>
                <span><Thumbs /> </span>
                <p>reply</p>
                </div>
            </div>
            <hr></hr>
            <div className='comments-box'>
                <h3>Ademola Ogunlalu . 1h</h3>
                <p>Optional. For the purpose of mitigating replay attacks, specify the string value to use to associate a client session with an id_token. The id_token includes information (claims) about the user and, if specified, the nonce value. The id_token is encoded as a JWT and returned in the</p>
                <div className='auth-like'>
                <span><Thumbs /> </span>
                <p>reply</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AuthLibrary