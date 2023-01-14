document.querySelectorAll('.interests_main > ul > li.interest').forEach(interest => {
    interest.querySelector('label > [type="checkbox"]').addEventListener('change', e => {
        e.currentTarget.closest('.interest').querySelectorAll('[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = e.currentTarget.checked;
        })
    })
})