let sidebar = document.querySelector('.sidebar');

document.querySelector('#new-btn').onclick = () =>{
    sidebar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}