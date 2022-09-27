function subscribeForm() {

	const modalSubsBtn = document.querySelector('.link-subscribe'), //получить button Подписаться по классу
		modalSubs = document.querySelector('.modal-subs'),
		modalSubsClose = document.querySelector('[data-subs="close"]'),
		modalSubsForm = document.querySelector('.modal-subs__form'),
		modalSubsInput = document.querySelector('.modal-subs__mail');

	function openModalSubs() {
		modalSubs.classList.add('modal-subs__show');
		modalSubs.classList.remove('modal-subs__hide');
		document.body.style.overflow = 'hidden';
	}

	function closeModalSubs() {
		modalSubs.classList.add('modal-subs__hide');
		modalSubs.classList.remove('modal-subs__show');
		document.body.style.overflow = '';
	}

	function createModalSubsError(input) {
		const modalSubsErrParag = document.createElement('p');
		modalSubsErrParag.classList.add('modal-subs__error');
		modalSubsErrParag.textContent = '*Неверный формат заполнения';
		modalSubsForm.append(modalSubsErrParag);

		input.addEventListener('input', () => {
			modalSubsErrParag.remove();
		});
	}

	//модалка об отправке формы подписки
	const message = {
		success: 'Спасибо за подписку!',
		failure: 'Что-то пошло не так...'
	};

	function showSuccessModalSubs(message) {
		const modalSubsWrapper = document.querySelector('.modal-subs-wrapper');

		openModalSubs();

		const successModalSubs = document.createElement('div');
		successModalSubs.innerHTML = `
				<div class="modal-subs-content">
					<div data-subs="close" class="modal-subs__close">&times;</div>
					<div class="modal-subs__title">${message}</div>
				</div>
			`;

		modalSubsWrapper.append(successModalSubs);
		modalSubsWrapper.addEventListener('click', () => {
			successModalSubs.remove();
		});
	}

	modalSubsBtn.addEventListener('click', openModalSubs);
	modalSubsClose.addEventListener('click', closeModalSubs);
	modalSubs.addEventListener('click', (event) => {
		if (event.target === modalSubs) {
			closeModalSubs();
		}
	});

	//fetch
	const url = 'https://jsonplaceholder.typicode.com/posts';

	modalSubsForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const modalSubsEmail = modalSubsInput.value;

		const userEmail = {
			email: modalSubsEmail
		};

		async function registerNewSubs() {
			try {
				const response = await fetch(url, {
					method: 'POST',
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
					body: JSON.stringify(userEmail)
				});
				const userData = await response.json();
				console.log(userData);
				showSuccessModalSubs(message.success);
			} catch {
				showSuccessModalSubs(message.failure);
				throw new Error('Ошибка отправки формы подписки!');
			} finally {
				modalSubsForm.reset();
			}
		}

		if (modalSubsInput.validity.typeMismatch || modalSubsInput.value === '') {
			createModalSubsError(modalSubsInput);
		} else {
			registerNewSubs();
		}
	});
}

export default subscribeForm;