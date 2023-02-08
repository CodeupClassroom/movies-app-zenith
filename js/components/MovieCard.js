class MovieCard {
    constructor(movie, target){
        this.title = movie.title;
        this.poster_path = movie.poster_path;
        this.element = document.createElement('div');
        this.element.classList.add('movie-wrapper');
        this.vote_average = movie.vote_average;
        this.target = target;
        this.render();
    }
    render(){
        let html = `
        <div class="movie-view">
            <div class="movie-poster-wrapper">
                <img src="https://image.tmdb.org/t/p/original/${this.poster_path}" alt="" class="movie-poster-image">
                <div class="movie-poster-hover">
                    <div class="movie-actions">
                        <div class="movie-action-button">
                            Edit
                        </div>
                        <div class="movie-action-button delete">
                            Delete
                        </div>
                    </div>
                </div>
            </div>
            <h3>${this.title}</h3>
            <div class="movie-rating-wrapper">
                ${this.renderStarRating()}
                <div class="movie-rating-votes">180k voters</div>
            </div>
        </div>
        `
        this.element.innerHTML = html;
        this.target.appendChild(this.element)
    }
    renderStarRating(){
        let html = ``;
        return html;
    }
}

export { MovieCard }