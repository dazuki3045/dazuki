console.log("dz4")
function getDiscount(amount, percent) {
    let discount = 0;
    discount = amount * percent / 100;
    discount = amount - discount
    return discount;
}
function capitalizeString(name) {
    result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return result;
}
function getRatingStars(rating) {
    if (rating < 1 || rating > 5) {
        return "рейтинг должен быть от 1 до 5"
    }
    let stars = "";
    for (let i = 0; i < rating; i++) {
        stars += "★";
    }
    return stars
}