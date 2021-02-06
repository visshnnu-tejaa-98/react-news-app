import Footer from './footer';
import NavBar from './NavBar';

const Contact = () => {
	return (
		<div>
			<NavBar />
			<h1 className='container text-center mt-5 mb-5'>
				<i class='fas fa-newspaper'></i> Contact Us
			</h1>
			<p className='container about-page mb-4'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, sequi cupiditate ab
				perferendis, consequuntur nostrum animi a accusantium necessitatibus error fugit consequatur
				ex reprehenderit illum iste? Nemo recusandae deleniti reiciendis.Lorem ipsum dolor sit, amet
				consectetur adipisicing elit. Similique, sequi cupiditate ab perferendis, consequuntur
				nostrum animi a accusantium necessitatibus error fugit consequatur ex reprehenderit illum
				iste? Nemo recusandae deleniti reiciendis.
			</p>
			<form action='https://formspree.io/f/xrgoryak' class='container' method='POST'>
				<div className='form-group'>
					<input type='text' name='name' class='form-control' placeholder='Name' />
				</div>
				<div class='form-group'>
					<input type='email' name='email' class='form-control' placeholder='Email' />
				</div>
				<div className='form-group'>
					<textarea
						name=''
						id=''
						cols=''
						rows='3'
						class='form-control'
						placeholder='Message'
					></textarea>
				</div>
				<button type='submit' name='button' class='btn btn-outline-primary'>
					Submit
				</button>
			</form>
			<Footer />
		</div>
	);
};

export default Contact;
