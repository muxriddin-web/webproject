// ShowPage funksiyasi
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.style.display = 'none');

  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.style.display = 'block';

    // Footerni ko‘chirish
    const footer = document.getElementById('footer');
    activePage.appendChild(footer);
  }

  // Nav active klass yangilash
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === pageId) {
      link.classList.add('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('DOMContentLoaded', () => {
  showPage('home');

  const form = document.getElementById('contactForm');
  if (!form) return console.error('Form topilmadi');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.disabled = true;

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
    };

    const msgEl = document.getElementById('responseMessage');
    msgEl.textContent = '';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        msgEl.textContent = '✅ Xabaringiz yuborildi!';
        msgEl.style.color = 'green';
        form.reset();
      } else {
        msgEl.textContent = '❌ Xatolik: ' + result.message;
        msgEl.style.color = 'red';
      }
    } catch {
      msgEl.textContent = '❌ Serverga ulanishda xatolik.';
      msgEl.style.color = 'red';
    } finally {
      btn.disabled = false;
    }
  });
});
//   let currentEditableElement = null;

//   document.querySelectorAll('.editable').forEach(el => {
//     el.addEventListener('click', () => {
//       currentEditableElement = el;
//       document.getElementById('passwordModal').style.display = 'block';
//     });
//   });

//   document.getElementById('confirmPassword').addEventListener('click', () => {
//     const password = document.getElementById('editPassword').value;

//     fetch('/api/check-password', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ password })
//     })
//     .then(res => res.json())
//     .then(data => {
//       if (data.success) {
//         currentEditableElement.setAttribute('contenteditable', 'true');
//         currentEditableElement.focus();
//         alert('Endi tahrirlashingiz mumkin!');

//         const onBlur = () => {
//           fetch('/api/update-text', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//               id: currentEditableElement.dataset.id,
//               text: currentEditableElement.textContent
//             })
//           });
//           currentEditableElement.removeAttribute('contenteditable');
//           currentEditableElement.removeEventListener('blur', onBlur);
//         };

//         currentEditableElement.addEventListener('blur', onBlur);

//       } else {
//         alert(' Parol noto‘g‘ri!');
//       }

//       document.getElementById('passwordModal').style.display = 'none';
//       document.getElementById('editPassword').value = '';
//     });
//   });
// });
