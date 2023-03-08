const store_high_scores_text = document.querySelector("#store_high_scores_text");
const clear_local_storage_value = document.querySelector("#store_high_scores_text");
const clear_button = document.querySelector("#clear")

// my div tag to hold the stored values and show as all the values that are stored by the user
let high_scores_tag = '';

//clear the stored value from local storage
clear_button.onclick = () => {
    localStorage.clear();
    clear_local_storage_value.innerHTML = ""
}

for (let i = 0; i < localStorage.length; i++) {
    high_score_data_Value = JSON.parse(localStorage.getItem(i + 1));
    high_scores_tag = high_scores_tag.concat('</br><div id="store_high_scores_text" style="color:green">' + high_score_data_Value.initials + "   :   " + high_score_data_Value.score + '</div>');
};

store_high_scores_text.innerHTML = high_scores_tag;