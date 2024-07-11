
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Employee from './components/HR/Master/Employee/Employee'
import NewEmp from './components/HR/Master/Employee/NewEmp'
import Empedit from './components/HR/Master/Employee/Empedit'
import Empview from './components/HR/Master/Employee/Empview'
import Category from './components/HR/Master/Category/Category'
import Depatment from './components/HR/Master/Department/Depatment'
import Designation from './components/HR/Master/Designation/Designation'
import Location from './components/HR/Master/Location/Location'
import Login from './components/auth/Login'
import PieceRate from './components/HR/Master/PieceRate/PieceRate'
import Vehicle from './components/HR/Master/Vehical/vehicle'
import Products from './components/HR/Master/Products/Products'
import Report from './components/HR/Reports/Report'
import NewProduct from './components/HR/Master/Products/NewProduct'
import DirInout from './components/Gatepass/Director Inout/DirInout'
import Entry from './components/Gatepass/Entry/Entry'
import Inout from './components/Gatepass/InOut/Inout'
import WithoutGp from './components/Gatepass/InOut/WithoutGp'
import Post from './components/Gatepass/Post/Post'
import Production from './components/HR/Transaction/Production/Production'
import Attendance from './components/HR/Transaction/Attendance/Attendance'
import Newattend from './components/HR/Transaction/Attendance/Newattend'
import NewProd from './components/HR/Transaction/Production/NewProd'
import Create from './components/Book-Meet/Create/Create'
import View from './components/Book-Meet/View/View'
import Logout from './components/auth/Logout'
import { useSelector } from 'react-redux'
import Register from './components/auth/Register'
import AcGroup from './components/Society/Master/AC Group/AcGroup'
import SocAccount from './components/Society/Master/Account/SocAccount'
import EditMember from './components/Society/Master/Member/EditMember'
import Newmember from './components/Society/Master/Member/Newmember'
import SocMember from './components/Society/Master/Member/SocMember'
import SocScheme from './components/Society/Master/Scheme/SocScheme'

import PostView from './components/Gatepass/Post/PostView'
import GatepassReport from './components/Gatepass/Reports/Gatepass/GatepassReport'
import CreateNewGroup from './components/Society/Master/AC Group/CreateNewGroup'
import CreateNewAccount from './components/Society/Master/Account/CreateNewAccount'
import CreateNewScheme from './components/Society/Master/Scheme/CreateNewScheme'
import CreateVeq from './components/Veh-Req/Create/Create'
import ViewReq from './components/Veh-Req/Create/View/ViewReq'
import Voucher from './components/Veh-Req/Voucher/Voucher'
import Tvcreate from './components/Veh-Req/Voucher/Tvcreate'

const Index = () => {
  const { isAuthenticated,user } = useSelector((state: any) => state.auth)
  const role = JSON.parse(user);

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {!isAuthenticated  ? (<>
          
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<Navigate to="/login" />} />
        </>) : (<>
          <Route path='/' element={<h1>Home</h1>} />
           
           {/* HR Comp */}
          <Route path='/employee' element={<Employee />} />
          <Route path='/newemp' element={<NewEmp />} />
          <Route path='/empedit/:emp_id' element={<Empedit />} />
          <Route path='/empview/:emp_id' element={<Empview />} />
          <Route path='/category' element={<Category />} />
          <Route path='/department' element={<Depatment />} />
          <Route path='/designation' element={<Designation />} />
          <Route path='/location' element={<Location />} />
          <Route path='/piecerate' element={<PieceRate />} />
          <Route path='/vehicle' element={<Vehicle />} />
          <Route path='/products' element={<Products />} />
          <Route path='/report' element={<Report />} />
          <Route path='/newproduct' element={<NewProduct />} />

          {/* Gatepass comp */}
          <Route path='/gpassentry' element={<Entry />} />
          {role.role === "Security" ?( <Route path='/inout' element={<Inout />} /> ): " Cant  "}
            
          <Route path='/logout' element={<Logout />} />
          <Route path='/wgpemp' element={<WithoutGp />} />
         {role.role === "Manager" || role.role == "Admin" || role.role ==="Master" ? ( <Route path='/post' element={<Post />} />): null} 
          <Route path='/postview/:gp_no' element={<PostView />} />
          <Route path='/dinout' element={<DirInout />} />
          <Route path='/gatepassreport' element={<GatepassReport/>}/>

          
          <Route path='/prodview' element={<Production />} />
          <Route path='/attendview' element={<Attendance />} />
          <Route path='/newprod' element={<NewProd />} />
          <Route path='/attendnew' element={<Newattend />} />
          <Route path='/create' element={<Create />} />
          <Route path='/view' element={<View />} />


          {/* society comp */}
          <Route path='/society/memview' element={<SocMember />} />
          <Route path='/society/groupview' element={<AcGroup />} />
          <Route path='/society/accview' element={<SocAccount />} />
          <Route path='/society/schemeview' element={<SocScheme />} />
          <Route path='/newscheme' element = {<CreateNewScheme/>} />
          <Route path='/society/newmember' element={<Newmember />} />
          <Route path='/society/editmember/:mem_id' element={<EditMember />} />
          <Route path='/newgroup' element = {<CreateNewGroup/>} />
          <Route path='/newacc' element = {<CreateNewAccount/>} />


          {/* veq-req comp */}
          <Route path='/createveq' element={<CreateVeq />} />
          <Route path='/viewreq' element={<ViewReq />} />
          <Route path='/voucher' element={<Voucher/>}/>
          <Route path="/tvcreate" element={<Tvcreate/>}/>
 
        </>)}
      </Routes>
    </BrowserRouter>
       
       </>
  )
}

export default Index;
