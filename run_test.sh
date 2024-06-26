#!/bin/sh

# This script runs Playwright tests every minute

while true; do
    # Run the test and capture the exit status
    npx playwright test embassyCheck.test.ts
    test_exit_status=$?

    # Check if the test failed (non-zero exit status)
    if [ $test_exit_status -ne 0 ]; then
        echo "Test failed with exit status $test_exit_status"
    fi

    # If the test passed, sleep for 15 seconds before running the next test
    sleep 15
done
