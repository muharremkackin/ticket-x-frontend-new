class Paginator {
    static init() {
        document.querySelectorAll('[data-type="link"][data-page]').forEach(element => {
            element.addEventListener('click', function () {
                let active_page = document.querySelector('[data-type="page"][data-page][data-active="true"]');
                let page = document.querySelector('[data-type="page"][data-page="' + this.dataset.page + '"]')
                
                active_page.setAttribute('data-active', 'false');
                active_page.classList.add('hidden');

                page.setAttribute('data-active', 'true');
                page.classList.remove('hidden');
            });
        });

        document.querySelectorAll('[data-type="ContentButton"][data-content="TheaterMovies"]').forEach(element => {
            element.addEventListener('click', function () {
                let theaters = document.querySelector('[data-content="Theaters"]');

                theaters.classList.add('hidden');
                theaters.setAttribute('data-active', 'false');

                let movies = document.querySelector('[data-type="Content"][data-content="TheaterMovies"]')
                movies.setAttribute('data-active', 'true');
                movies.classList.remove('hidden');
            })
        });
    }
}
