



function soundNotification() {
    const sound = new Audio('path/to/your/sound/notification.mp3');

    const promise = sound.play();

    if (promise !== undefined) {
        promise.then(() => {}).catch(error => console.error);
    }
}
