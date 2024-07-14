document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('main').classList.add('show-main');
});

function showCategory(categoryId) {
    // 모든 카테고리 div 요소를 숨깁니다.
    const categories = document.querySelectorAll('.content');
    categories.forEach(category => {
        category.style.display = 'none';
    });

    // 선택한 카테고리 div 요소만 표시합니다.
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'flex';
    }
}
