const Footer = () => {
	return (
		<div className='footer mt-5'>
			<p>All rights reserverd &copy; {new Date().getFullYear()}</p>
			<i className='fab fa-facebook-f m-3'></i>
			<i className='fab fa-twitter m-3'></i>
			<i className='fab fa-instagram m-3'></i>
		</div>
	);
};

export default Footer;
