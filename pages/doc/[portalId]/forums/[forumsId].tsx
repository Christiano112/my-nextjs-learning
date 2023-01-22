import { useRouter } from 'next/router';
const Forums = () => {
    const router = useRouter();
    const { portalId, forumsId } = router.query
    return (
        <div>
            <h1>Forums {forumsId} for portal {portalId} </h1>
        </div>
    );
}

export default Forums;