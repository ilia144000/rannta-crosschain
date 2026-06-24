$expectedDirs = @("packages/core/src", "packages/warp/src", "packages/bridge/src", "packages/gateway/src")
foreach ($dir in $expectedDirs) {
    if (Test-Path $dir) {
        Write-Output "VERIFIED: $dir exists."
    } else {
        Write-Error "MISSING: $dir not found."
        exit 1
    }
}
Write-Output "INTEGRITY CHECK PASSED: All local subsystem stubs are structurally intact."
