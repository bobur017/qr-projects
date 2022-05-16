import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function QrPage() {
    const [userId, setUserId] = useState('');
    let { id } = useParams();
    useEffect(() => {
        console.log(id, 'id');
        setUserId(id);
    }, [])

    return (
        <div>
            QrPage
            <div>
                Salom
            </div>
        </div>
    )
}

export default QrPage