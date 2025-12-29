export default function Projects() {
  const projects = [
        {
      title: "Institutional-Grade Smart Order Flow Alpha Engine",
      problem:
        "Retail trading systems often ignore market microstructure, execution risk, and professional risk controls, leading to unstable performance.",
      solution:
        "Built a full research-to-execution quantitative trading system on BankNifty intraday data. Engineered microstructure features (price pressure, volatility, trend regime), trained an ML alpha model (XGBoost) with walk-forward validation, and designed a professional risk engine with volatility targeting, drawdown kill-switch, and regime cooldown. Final strategy achieved Sharpe 2.59 with 27% max drawdown.",
      tech: [
        "Python",
        "Quantitative Finance",
        "Machine Learning",
        "XGBoost",
        "Market Microstructure",
        "Risk Engineering",
        "Backtesting"
      ],
    },

    {
      title: "Trading Strategy Development (Forex – NY Session)",
      problem:
        "Discretionary trading decisions without systematic validation lead to inconsistent performance.",
      solution:
        "Designed and backtested a proprietary forex trading strategy tailored for the New York session, achieving a 71% win rate over a full month. Analyzed equity curves, P&L, drawdowns, and volatility behavior using structured trade logs and visual reports.",
      tech: ["Python", "Probability", "Trading Systems", "Risk Analysis"],
    },
    {
      title: "Options Pricing Models (Quantitative Finance)",
      problem:
        "Option values vary non-linearly with market parameters and require robust mathematical modeling.",
      solution:
        "Implemented Black-Scholes, Binomial, and Monte Carlo models in Python to price European options. Automated pricing across parameter ranges, generated CSV outputs, and documented theoretical foundations and sensitivity analysis.",
      tech: ["Python", "Quant Finance", "Monte Carlo", "Derivatives"],
    },
    {
      title: "Machine Learning on Real-Time Market Data (NIFTY-50)",
      problem:
        "Batch ML models struggle to adapt to continuously evolving financial time-series data.",
      solution:
        "Built an online ML system using stochastic gradient descent to predict NIFTY-50 price movements from streaming data. Engineered OHLC, volume, and temporal features; achieved test MSE ≈ 0.08 with efficient real-time performance.",
      tech: ["Python", "Machine Learning", "SGD", "Time Series"],
    },
    {
      title: "Rubik’s Cube Solver using Korf’s IDA*",
      problem:
        "Brute-force search is infeasible for solving combinatorial state-space problems efficiently.",
      solution:
        "Modeled a virtual 3×3 Rubik’s Cube in C++ and implemented BFS, DFS, IDDFS, and Korf’s IDA* algorithm. Achieved solutions for 13-move scrambles in under 10 seconds using admissible heuristics.",
      tech: ["C++", "Algorithms", "IDA*", "State-Space Search"],
    },
    {
      title: "Vehicle Routing Optimization using Genetic Algorithms",
      problem:
        "Finding optimal routes in VRP is NP-hard and unsuitable for exact methods at scale.",
      solution:
        "Applied genetic algorithms using the DEAP library to solve VRP. Designed a custom fitness function, evolved route populations, and visualized optimized solutions using Matplotlib.",
      tech: ["Python", "Genetic Algorithms", "Optimization"],
    },
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <div className="space-y-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="rounded-xl p-6
                  bg-gradient-to-br from-gray-900 via-gray-950 to-black
                  border border-cyan-400/20
                  hover:border-cyan-400/50
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                  transition
                  "
          >
            <h3 className="text-xl font-semibold mb-3">
              {p.title}
            </h3>

            <p className="text-gray-400 mb-2">
              <span className="text-white">Problem:</span> {p.problem}
            </p>

            <p className="text-gray-400 mb-4">
              <span className="text-white">Approach:</span> {p.solution}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1 border border-gray-600 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
