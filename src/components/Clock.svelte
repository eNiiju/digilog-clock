<script lang="ts">
    export let rotateHours: number;
    export let rotateMinutes: number;
</script>

<div class="clock" style={`--rotate-hours: ${rotateHours}deg; --rotate-minutes: ${rotateMinutes}deg;`}>
    <div class="hours" />
    <div class="minutes" />
    <div class="clock-background" />
</div>

<style>
    .clock {
        position: relative;
        width: min(125px, 10vw);
        aspect-ratio: 1/1;
    }

    @media (max-width: 768px) {
        .clock {
            width: min(125px, 20vw);
        }
    }

    .clock-background {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background: #e0e0e0;
        box-shadow: inset 20px 20px 60px #b3b3b3, inset -20px -20px 60px #ffffff;
    }

    .hours,
    .minutes {
        --width: min(20px, 2vw);
        position: absolute;
        height: 50%;
        width: var(--width);
        top: calc(var(--width) / 2);
        left: calc(50% - var(--width) / 2);
        background-color: #1d1c23;
        border-radius: 999px;
        transform-origin: calc(var(--width) / 2) calc(100% - var(--width) / 2);
        transition: transform 5s;
    }

    @media (max-width: 768px) {
        .hours,
        .minutes {
            --width: 3vw;
        }
    }

    .hours {
        transform: rotate(var(--rotate-hours));
    }
    .minutes {
        transform: rotate(var(--rotate-minutes));
    }
</style>
