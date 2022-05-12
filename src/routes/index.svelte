<script lang="ts">
    import Digit from '../components/Digit.svelte';

    let date: Date, digit1 = 0, digit2 = 0, digit3 = 0, digit4 = 0;

    setInterval(() => {
        date = new Date();

        digit2 = date.getHours() % 10;
        digit1 = (date.getHours() - digit2) / 10;
        digit4 = date.getMinutes() % 10;
        digit3 = (date.getMinutes() - digit4) / 10;
    }, 1000);
</script>

<div class="main-container">
    <div class="hours-container">
        <Digit value={digit1} />
        <Digit value={digit2} />
    </div>

    <div class="minutes-container">
        <Digit value={digit3} />
        <Digit value={digit4} />
    </div>
</div>

<style>
    .main-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        gap: var(--gap);
        background-color: rgb(243, 236, 236);
        border-radius: 10px;
        padding: 25px;
    }

    .hours-container, .minutes-container {
        display: flex;
        gap: var(--gap);
    }

    @media (max-width: 768px) {
        .main-container {
            flex-direction: column;
        }
    }
</style>
