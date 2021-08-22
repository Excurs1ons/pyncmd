var ffta_settings = {
    'barStyle': ['#e2f1f8', '#e2f1f8', '#e2f1f8', '#b0bec5', '#b0bec5', '#b0bec5', '#808e95', '#808e95'],
    'spacing': 2,
    'ratio': 0.7,
    'fftSize': 512,
    'threshold': 3,
    'range_l': 0,
    'range_r': 0.3,
    'accel': 0.95,
    'apush': 30,
    'sequence': () => {
        draw_bass_response()
        draw_bars();
    },
    'disable':false,
    'showFPS':false,
    'minFrameTime':1000/60,
}

function fftInit() {
    var peakmeter = document.getElementById('visualizer')
    var audioCtx = new window.AudioContext()
    // connecting the analyzer    
    var source = audioCtx.createMediaElementSource(vue.player)
    source.connect(audioCtx.destination)
    var analyzer = audioCtx.createAnalyser()
    source.connect(analyzer)
    vue.player.addEventListener('play', function () {
        audioCtx.resume();
    });
    setup(analyzer, peakmeter, 320, 180, ffta_settings)
    update()
    console.log('[fft] initialized with settings ', ffta_settings)
}

window.addEventListener('load', () => {
    fftInit()
})