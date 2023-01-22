import { useRouter } from 'next/router';

const Portal = () => {
    const router = useRouter();
    const portalId = router.query.portalId;

    return (
        <div>
            <h1>Welcome to The Portal Page {portalId}</h1>
        </div>
    );
}

export default Portal;