import { Outlet } from 'react-router-dom';
import Container from 'components/@shared/Container';

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
