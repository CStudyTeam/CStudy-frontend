import Container from 'components/@shared/Container';
import { Outlet } from 'react-router-dom';

const AdminRoot = () => {
    return (
        <div>
            <Container>
                <Outlet />
            </Container>
        </div>
    );
};

export default AdminRoot;
