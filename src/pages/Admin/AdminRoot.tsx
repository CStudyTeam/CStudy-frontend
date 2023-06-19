import AdminHeader from 'components/@shared/Admin/AdminHeader';
import Container from 'components/@shared/Container';
import { Outlet } from 'react-router-dom';

const AdminRoot = () => {
    return (
        <div>
            <Container>
                <AdminHeader />
                <Outlet />
            </Container>
        </div>
    );
};

export default AdminRoot;
