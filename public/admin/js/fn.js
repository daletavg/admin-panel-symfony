function getSection({ title, desc, oldPrice, price, image, serviceType, id }) {
    const section = `
    <div data-id="${id}" class="stock__item">
    <div class="row">
        <div class="col-md-6 order-2 order-md-0">
            <h3 class="stock-item-title">
                ${title}         
            </h3>
            <p class="stock-text">
            ${desc}       
            </p>
        </div>
        <div class="col-md-2 d-flex flex-column justify-content-between order-1">
            <div class="stock-price-box">
                <span class="stock-new-price">${price} руб</span>
                <span class="stock-old-price">${oldPrice} руб</span>
            </div>
            <span class="stock-type">
            ${serviceType}
            </span>
        </div>
        <div class="col-md-4 order-0 order-md-2">
            <div class="stock-img-box">
                <img src="${image}" alt="">
            </div>
        </div>
    </div>
</div>
    `;
    return section;
}
function addToArray(array, el) {
    const string = array.join('');
    console.log(string)
    el.insertAdjacentHTML("afterEnd", string);
}

$(".show-more-link").click(function(e) {
    e.preventDefault();
    const that = $(this);
    const url = that.attr("data-url");
    const stocksArray = $(".stock__item");
    const id = $(stocksArray[stocksArray.length - 1]).attr("data-id");

    const dataSend = {
        lastId: id
    };
    $.ajax({
        url,
        data: dataSend,
        success: function(res) {
            const newStock = res.map(
                ({ title, desc, oldPrice, price, image, serviceType, id }) => {
                    return getSection({
                        title,
                        desc,
                        oldPrice,
                        price,
                        image,
                        serviceType,
                        id
                    });
                }
            );
            addToArray(newStock, stocksArray[stocksArray.length - 1]);
        },
        error: function(err) {
            console.log(err);
        }
    });
});
