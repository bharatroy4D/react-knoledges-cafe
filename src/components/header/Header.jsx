import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between mx-10 py-2 border-b-2 '>
            <h1 className="text-3xl font-bold">Knowledge cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;