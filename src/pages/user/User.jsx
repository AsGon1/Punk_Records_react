import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { getUser } from "../../utils/backend/functions";
import { NavLink } from 'react-router-dom';

import './User.css'

function UserHome() {
    const user = useLoaderData();
    const navigate = useNavigate();

    return (
        <section className="user-home">
            <section className="user-data">
                <img src={user.avatar} className="user-avatar" alt="user avatar" />
                <h2 className="user-name">{user.nickname}</h2>
                <p className="user-description">{user.description}</p>
            </section>
            <section className="user-options">
                <article className="user-option__favorites">
                    
                </article>
                <article className="user-option__reviews">

                </article>
            </section>
        </section>
    )
}