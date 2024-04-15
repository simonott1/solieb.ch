document.addEventListener('DOMContentLoaded', (event) => {
    const bgvid = document.getElementById('bgvid');
    const muteButton = document.getElementById('mute_button');
    const arrowImg = document.getElementById('arrow_img');
    const arrowHref = document.getElementById('arrow_href');
    const contentContainer = document.getElementById('content_container');

    // Function to toggle sound
    function switchSound() {
        bgvid.muted = !bgvid.muted;
        muteButton.src = bgvid.muted ? 'image/logo/muted.png' : 'image/logo/unmute.png';
    }

    // Attach event listener to sound toggle button
    document.getElementById('switch_sound_button').addEventListener('click', switchSound);

    // Scroll to content or start
    function scrollToContent() {
        window.scrollTo({
            top: contentContainer.offsetTop,
            behavior: 'smooth'
        });
    }

    function scrollToStart() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Dynamically adjust arrow and add click event based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            arrowImg.src = 'image/logo/arrow_up.png';
            arrowHref.onclick = scrollToStart;
        } else {
            arrowImg.src = 'image/logo/arrow_down.png';
            arrowHref.onclick = scrollToContent;
        }
    });

    // Resize content container based on viewport height
    function resizeContainer() {
        contentContainer.style.top = `${window.innerHeight}px`;
    }

    window.addEventListener('resize', resizeContainer);
    resizeContainer(); // Initial call to set container size

    // Video source lazy-loading
    function lazyLoadVideo() {
        if (bgvid.getAttribute('data-loaded') !== 'true') {
            const sources = bgvid.getElementsByTagName('source');
            for (let i = 0; i < sources.length; i++) {
                sources[i].src = sources[i].dataset.src;
            }
            bgvid.load();
            bgvid.setAttribute('data-loaded', 'true');
        }
    }

    // Call lazy load video function
    lazyLoadVideo();
});
