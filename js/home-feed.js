// const loadMoreButton = document.createElement('button');
// loadMoreButton.innerText = 'Load More';
// loadMoreButton.addEventListener('click', loadMorePosts);
// feed.appendChild(loadMoreButton);
document.addEventListener("DOMContentLoaded", function () {
    const feed = document.getElementById('feed');
    const homeButton = document.getElementById('homeFooterButton');
    homeButton.addEventListener('click', loadMorePosts);
});

function loadMorePosts() {
    // Simulate fetching more posts from an API or database
    // Replace this with your actual data retrieval logic
    const newPosts = getNewPosts(); // Example function to get new posts

    // Create and append new post elements
    newPosts.forEach((post) => {
        const postElement = createPostElement(post);
        feed.appendChild(postElement);
    });
}

function getNewPosts() {
    // Example: Fetch new posts from an API or generate dummy data
    // Return an array of post objects with additional properties
    // Modify this function according to your backend setup
    // For now, let's return some dummy data
    return [
        {
            username: 'Alice',
            content: 'New post from Alice',
            image: './Assets/ARicon.png',
            likes: 10,
            comments: [
                { user: 'Bob', text: 'Great post, Alice!' },
                { user: 'Carol', text: 'Love it!' },
            ],
        },
        // Add more posts here
    ];
}

function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <div class="user-info">
            <i class="fa-solid fa-user-astronaut"></i>
            <span class="username">${post.username}</span>
        </div>
        <img src="${post.image}" alt="Post Image" class="post-image">
        <p class="post-content">${post.content}</p>
        <div class="post-interactions">
            <span class="likes">${post.likes} Likes</span>
            <div class="comments">
                ${post.comments.map((comment) => `<div class="comment">${comment.user}: ${comment.text}</div>`).join('')}
            </div>
        </div>
    `;
    return postElement;
}