import axios from 'axios';
import css from '../styles/Home.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Boot() {
    return (
        <div className={css.wrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        01
                    </div>
                    <div className="col-6">
                        02
                    </div>
                </div>
            </div>
        </div>
    )
}
